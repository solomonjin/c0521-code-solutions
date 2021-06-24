const fs = require('fs');

const fileList = process.argv.filter((x, i) => i > 1).map((x, i) => ({ title: x, index: i }));

const textList = [];

for (let i = 0; i < fileList.length; i++) {
  fs.readFile(fileList[i].title, 'utf8', (err, data) => {
    if (err) throw err;
    textList.push(data);
    if (textList.length === fileList.length) console.log(textList);
  });
}

function printFiles() {
  textList.forEach(text => console.log(text));
}
