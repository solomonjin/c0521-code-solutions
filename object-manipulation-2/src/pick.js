/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}

// create a new object
// go through the array
//    if value of array at index is in source: add the property and value from old object to new
//    if value is undefined, exclude that property
// return new object
