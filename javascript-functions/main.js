function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var minutesToSecondsResult = convertMinutesToSeconds(3);
console.log('value of minutesToSecondsResult:', minutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetingResult = greet('Solomon');
console.log('value of greetingResult:', greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(32, 18);
console.log('value of areaResult:', areaResult);

function getFirstName(person) {
  return person.firstName;
}

var firstNameResult = getFirstName({ firstName: 'Solomon', lastName: 'Jin' });
console.log('value of firstNameResult:', firstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['first', 'second', 'notlast', 'last']);
console.log('value of lastElement:', lastElement);
