/* exported flatten */

function flatten(array) {
  var flattenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) flattenArray = flattenArray.concat(array[i]);
    else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}

// Create an empty array
// For each item in array, check to see if item is an array
//    if so, join together nested array with "outer" array
// else, push the object into new array
// return new array
