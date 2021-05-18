/* exported take */

function take(array, count) {
  if (count > array.length) return [];
  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// Check if count is greater than total length of array
//    if so, return an empty array
// create a new empty array
// loop through the given array up until index of value count
//    push the value of that index to the new array
// return new array
