var books = [
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss',
    isbn: 1
  },
  {
    tite: "Charlotte's Web",
    author: 'E.B. White',
    isbn: 2
  },
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss',
    isbn: 3
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var jsonBooks = JSON.stringify(books);
console.log('jsonBooks:', jsonBooks);
console.log('typeof jsonBooks:', typeof jsonBooks);

var jsonStudent = '{"id":1,"name":"Juan"}';
console.log('jsonStudent:', jsonStudent);
console.log('typeof jsonStudent:', typeof jsonStudent);

var student = JSON.parse(jsonStudent);
console.log('student:', student);
console.log('typeof student:', typeof student);
