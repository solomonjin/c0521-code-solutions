/* exported invert */

function invert(source) {
  var newObject = {};
  for (var key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}

// create a new object literal
// go through all the properties in the source, take their values
// create inversed properties/values on the new object
// return new object
