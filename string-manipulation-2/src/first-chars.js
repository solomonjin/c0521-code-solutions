/* exported firstChars */

function firstChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var shortString = '';
  for (var i = 0; i < length; i++) {
    shortString += string[i];
  }
  return shortString;
}

// Check if length is greater than length of string
//    if greater, return the entire string
// create a variable to hold empty string
// Go through the given string up until the given length
//    concatenate each letter
// return new string
