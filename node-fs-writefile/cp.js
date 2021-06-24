const fs = require('fs');
const input = process.argv.slice(2);
const [original, copy] = input;

function writeToFile(data) {
  fs.writeFile(copy, data + '\n', err => { if (err) throw err; });
}

fs.readFile(original, 'utf8', (err, data) => {
  if (err) throw err;
  writeToFile(data);
});
