/* exported unique */

function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    if (!isInArray(uniqueArray, array[i])) uniqueArray.push(array[i]);
  }
  return uniqueArray;
}

function isInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) return true;
  }
  return false;
}

// Create a new empty array
// Go through the array and check if each item has a duplicate
//    if item is not in the empty array, add it to empty array
//    if item is in empty array, do nothing
//    define separate function with parameters array and value  to check for duplicates:
//        go through the array, and check if value = any other index
//        return true if there is a match, return false otherwise
// return array
