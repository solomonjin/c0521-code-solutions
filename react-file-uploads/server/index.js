require('dotenv/config');
const pg = require('pg');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');
const path = require('path');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/uploads', uploadsMiddleware, (req, res, next) => {
  const { caption } = req.body;
  if (!caption) {
    throw new ClientError(400, 'caption is a required field');
  }
  /**
   * - create a url for the image by combining '/images' with req.file.filename
   * - insert the "caption" and "url" into the "images" table
   * - respond with the inserted row data
   * - catch any errors
   */
  const imageURL = path.join('/images/' + req.file.filename);
  const sql = `
  insert into "images" ("url", "caption")
                values ($1, $2)
             returning *;
  `;
  const params = [imageURL, caption];
  db.query(sql, params)
    .then(result => {
      const [img] = result.rows;
      res.status(201).json(img);
    })
    .catch(err => next(err));
});

app.get('/api/images', (req, res, next) => {
  const sql = `
    select *
      from "images"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
