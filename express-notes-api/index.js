const express = require('express');
const fs = require('fs');

const app = express();

app.get('/api/notes/:id', (req, res, next) => {
  const inputID = parseFloat(req.params.id);
  if (inputID <= 0 || !Number.isInteger(inputID)) {
    next();
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) throw err;
    const data = JSON.parse(dataJSON);

    if (!(inputID in data.notes)) {
      res.status(404).json({ error: 'entry not found' });
      return;
    }

    res.json(data.notes[inputID]);
  });
});

app.get('/api/notes', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) throw err;

    const data = JSON.parse(dataJSON);
    const notesList = [];
    for (const id in data.notes) {
      notesList.push(data.notes[id]);
    }
    res.json(notesList);
  });
});

app.listen(3000);
