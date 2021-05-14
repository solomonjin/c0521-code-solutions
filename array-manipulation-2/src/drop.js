/* exported drop */

function drop(array, count) {
  if (count > array.length) return [];
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Check if count is greater than array length
//    return empty array if true
// create an empty array
// loop through given array, but starting at index value of count
//    push to new array each iteration
// return new array
