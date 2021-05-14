/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      word += string[secondIndex];
    } else if (i === secondIndex) {
      word += string[firstIndex];
    } else {
      word += string[i];
    }
  }
  return word;
}

// create a new variable, word, to hold empty string
// loop through the string
//    when loop reaches firstIndex
//      concatenate value at string[secondIndex] instead
//    when loop reaches secondIndex:
//      concatenate value at string[firstIndex] instead
//  otherwise, add each letter to word normally
// return word
