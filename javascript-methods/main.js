var num1 = 23;
var num2 = -234;
var num3 = 9023;

var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Batman', 'Hulk', 'Superman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random Hero:', randomHero);

var library = [
  { title: 'Green Eggs & Ham', author: 'Dr. Seuss' },
  { title: "Charlotte's Web", author: 'EB White' },
  { title: 'Harry Potter', author: 'JK Rowling' }
];

var lastBook = library.pop();

console.log('Last book in array:', lastBook);

var firstBook = library.shift();

console.log('First book in array:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library array:', library);

var fullName = 'Solomon Jin';
var firstAndLastName = fullName.split(' ');
console.log('First and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Say my name:', sayMyName);
