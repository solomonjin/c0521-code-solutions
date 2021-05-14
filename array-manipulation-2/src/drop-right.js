/* exported dropRight */

function dropRight(array, count) {
  if (count > array.length) return [];
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// If count > array.length, return empty array
// create new empty array
// loop through array, but ending at index value of array.length - count
// push into new array each iteration
// return new array
