/* exported intersection */

function intersection(first, second) {
  var uniqueValues = [];
  for (var i = 0; i < first.length; i++) {
    if (isInArray(second, first[i]) && !isInArray(uniqueValues, first[i])) uniqueValues.push(first[i]);
  }
  for (i = 0; i < second.length; i++) {
    if (isInArray(first, second[i]) && !isInArray(uniqueValues, second[i])) uniqueValues.push(second[i]);
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
// for each item, check if it is in second array AND if it's NOT in unique array; if true, push item to empty array
// repeat for second array
// return new array
