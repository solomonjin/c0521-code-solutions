const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades', (req, res) => res.json(getGrades(grades)));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server is listening on port 3000'));

const getGrades = obj => {
  const grades = [];
  for (const key in obj) {
    grades.push(obj[key]);
  }
  return grades;
};
