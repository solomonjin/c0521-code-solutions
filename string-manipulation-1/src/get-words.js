/* exported getWords */

function getWords(string) {
  var stringArray = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      stringArray.push(word);
      word = '';
    } else if (i === string.length - 1) {
      word += string[i];
      stringArray.push(word);
    } else {
      word += string[i];
    }
  }
  return stringArray;
}
