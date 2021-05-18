/* exported isPalindromic */

function isPalindromic(string) {
  var reverseString = '';
  var noSpace = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      noSpace += string[i];
    }
  }
  for (i = noSpace.length - 1; i >= 0; i--) {
    reverseString += noSpace[i];
  }
  return reverseString === noSpace;
}

// Create a string for the reverse string as well as string for spaceless string
// Remove spaces from given string, assign it to spaceless string
// Take the spaceless string and reverse it
// If reversed string = spaceless string, return true
// otherwise, return false
