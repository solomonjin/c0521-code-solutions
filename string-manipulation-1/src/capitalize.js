/* exported capitalize */
function capitalize(string) {
  var capitalString = '';
  capitalString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    capitalString += string[i].toLowerCase();
  }
  return capitalString;
}
