const express = require('express');
const pg = require('pg');

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({ error: 'name, course, or score value(s) are missing' });
    return;
  }
  const inputScore = parseFloat(score);
  if (!Number.isInteger(inputScore) || inputScore < 0 || inputScore > 100) {
    res.status(400).json({ error: `score ${inputScore} is not a valid integer.` });
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *
  `;
  const params = [name, course, inputScore];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000);
