/* exported union */

function union(first, second) {
  var uniqueValues = [];
  for (var i = 0; i < first.length; i++) {
    if (!isInArray(uniqueValues, first[i])) uniqueValues.push(first[i]);
  }
  for (i = 0; i < second.length; i++) {
    if (!isInArray(uniqueValues, second[i])) uniqueValues.push(second[i]);
  }
  return uniqueValues;
}

function isInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

// Create a empty array
// go through first array
// for each item, check if it is NOT in unique array; if true, push item to empty array
// repeat for second array
// return new array
