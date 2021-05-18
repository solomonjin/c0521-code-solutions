/* exported takeRight */

function takeRight(array, count) {
  if (count > array.length) return [];
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Check to see if count is greater than array
// if so, return an empty array
// create a variable to hold empty array
// go through the given array but starting at index value of array.length - count
//    push the value into new array each iteration
// return new array
