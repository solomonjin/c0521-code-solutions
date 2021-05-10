var student = {
  firstName: 'Solomon',
  lastName: 'Jin',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'tutor';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Porsche',
  model: '718 Cayman GTS 4.0',
  year: 2021
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Cali',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
