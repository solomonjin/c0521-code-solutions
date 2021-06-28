const express = require('express');

const app = express();

let nextID = 1;

const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradeList = [];
  for (const id in grades) {
    gradeList.push(grades[id]);
  }
  res.json(gradeList);
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  const newEntry = {
    id: nextID,
    name: name,
    course: course,
    score: parseFloat(score)
  };
  grades[nextID] = newEntry;
  nextID++;
  res.status(201).send(newEntry);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on port 3000'));
