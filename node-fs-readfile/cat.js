const fs = require('fs');

const fileList = process.argv.filter((x, i) => i > 1);

const textList = [];

for (let i = 0; i < fileList.length; i++) {
  fs.readFile(fileList[i], 'utf8', (err, data) => {
    if (err) throw err;
    textList.push({ text: data, index: i });
    if (textList.length === fileList.length) printFiles();
  });
}

function printFiles() {
  for (let i = 0; i < textList.length; i++) {
    console.log(textList.find(text => text.index === i).text);
  }
}
