console.log('hello, world');
var header1 = document.querySelector('h1');
console.log('H1 element:', header1);
console.dir(header1);

var explanation = document.querySelector('#explanation');
console.log('Element with ID "explanation":', explanation);
console.dir(explanation);

var hint = document.querySelector('.hint');
console.log('Element with class "hint":', hint);
console.dir(hint);

var pElements = document.querySelectorAll('p');
console.log('All p elements:', pElements);

var links = document.querySelectorAll('.example-link');
console.log('All elements with class "example-link":', links);
