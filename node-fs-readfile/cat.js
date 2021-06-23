const fs = require('fs');

const fileList = process.argv.filter((x, i) => i > 1).map((x, i) => ({ title: x, index: i }));

console.log(fileList);
