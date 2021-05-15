/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var newFirstString = removeSpace(firstString);
  var newSecondString = removeSpace(secondString);
  var firstStringObj = createStringObject(newFirstString);
  var secondStringObj = createStringObject(newSecondString);
  for (var letter in firstStringObj) {
    if (firstStringObj[letter] !== secondStringObj[letter]) {
      return false;
    }
  }
  return true;
}

function removeSpace(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      newString += string[i];
    }
  }
  return newString;
}

function createStringObject(string) {
  var stringObject = {};
  for (var i = 0; i < string.length; i++) {
    if (stringObject[string[i]] === undefined) stringObject[string[i]] = 1;
    else {
      stringObject[string[i]]++;
    }
  }
  return stringObject;
}

// Create new empty strings for both given strings
// Remove any spaces and convert both strings to lowercase before assigning them to empty strings
// For each of those new strings, create an object
//    The object will have properties of each letter in string with value of how many times that letter appears
//    If property doesn't exist yet, set value to 1, if property already exists: increment the value
// Compare both string objects to see if each property/value matches with the other's
//    return false if no match
// return true otherwise
