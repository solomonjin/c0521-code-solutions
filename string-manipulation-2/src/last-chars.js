/* exported lastChars */

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  var newString = '';
  for (var i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}

// Check if given length is greater than length of string
//    if length > string: return entire string
// create a variable, newString, to hold new string
// loop through the string, but starting at the index of the difference between string's length and given length
//      add each letter to newString
// return newString
