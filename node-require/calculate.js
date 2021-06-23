const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const input = process.argv.filter((x, i) => i > 1);

const [strNum1, op, strNum2] = input;
const num1 = parseInt(strNum1);
const num2 = parseInt(strNum2);

if (op === 'plus') console.log(add(num1, num2));
if (op === 'minus') console.log(subtract(num1, num2));
if (op === 'times') console.log(multiply(num1, num2));
if (op === 'over') console.log(divide(num1, num2));
