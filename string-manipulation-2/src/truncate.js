/* exported truncate */
function truncate(length, string) {
  var shortString = '';
  if (string.length < length) {
    length = string.length;
  }
  for (var i = 0; i < length; i++) {
    shortString += string[i];
  }
  shortString += '...';
  return shortString;
}
