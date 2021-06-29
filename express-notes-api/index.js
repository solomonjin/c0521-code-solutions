const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const content = req.body.content;
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const data = JSON.parse(dataJSON);
    const newEntry = {
      id: data.nextId,
      content: content
    };
    data.notes[data.nextId] = newEntry;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }
      res.status(201).json(newEntry);
    });
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const inputID = parseFloat(req.params.id);
  if (inputID <= 0 || !Number.isInteger(inputID)) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const data = JSON.parse(dataJSON);
    if (!(inputID in data.notes)) {
      res.status(404).json({ error: `cannot find note with id ${inputID}` });
      return;
    }

    delete data.notes[inputID];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }

      res.status(204).send();
    });
  });
});

app.put('/api/notes/:id', (req, res) => {
  const content = req.body.content;
  const inputID = parseFloat(req.params.id);
  if (inputID <= 0 || !Number.isInteger(inputID)) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const data = JSON.parse(dataJSON);
    if (!(inputID in data.notes)) {
      res.status(404).json({ error: `cannot find note with id ${inputID}` });
      return;
    }
    data.notes[inputID].content = content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
        return;
      }

      res.status(200).json(data.notes[inputID]);
    });
  });
});

app.get('/api/notes/:id', (req, res) => {
  const inputID = parseFloat(req.params.id);
  if (inputID <= 0 || !Number.isInteger(inputID)) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const data = JSON.parse(dataJSON);

    if (!(inputID in data.notes)) {
      res.status(404).json({ error: `cannot find note with id ${inputID}` });
      return;
    }

    res.json(data.notes[inputID]);
  });
});

app.get('/api/notes', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, dataJSON) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
      return;
    }

    const data = JSON.parse(dataJSON);
    const notesList = [];
    for (const id in data.notes) {
      notesList.push(data.notes[id]);
    }
    res.json(notesList);
  });
});

app.listen(3000);
