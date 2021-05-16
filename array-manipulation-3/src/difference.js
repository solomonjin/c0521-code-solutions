/* exported difference */

function difference(first, second) {
  var uniqueValues = [];
  for (var i = 0; i < first.length; i++) {
    if (!isInArray(second, first[i])) uniqueValues.push(first[i]);
  }
  for (i = 0; i < second.length; i++) {
    if (!isInArray(first, second[i])) uniqueValues.push(second[i]);
  }
  return uniqueValues;
}

function isInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

// Create an empty array for unique values
// Loop through first array:
//    for each item in array, check if item is in second array
//        if NOT true, push item to unique array
// Loop through second array:
//    repeat process for first array
// return new array
