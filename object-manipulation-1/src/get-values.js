/* exported getValues */

function getValues(object) {
  var properties = [];
  for (var key in object) {
    properties.push(object[key]);
  }
  return properties;
}
