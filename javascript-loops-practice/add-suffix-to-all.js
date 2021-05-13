/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var suffixStrings = [];
  for (var i = 0; i < words.length; i++) {
    suffixStrings.push(words[i] + suffix);
  }
  return suffixStrings;
}
