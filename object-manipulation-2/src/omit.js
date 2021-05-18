/* exported omit */

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    if (!includes(keys, key)) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// create new Object
// go through source object for its keys
// Check if key is NOT in keys
//     If so, add that property/value to newObject
// return newObject
