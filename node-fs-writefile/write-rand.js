const fs = require('fs');

const num = Math.random().toString();

fs.writeFile('random.txt', num, err => {
  if (err) throw err;
});
