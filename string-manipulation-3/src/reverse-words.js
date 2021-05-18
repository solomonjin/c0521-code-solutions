/* exported reverseWords */

function reverseWords(string) {
  var wordArray = getWordArray(string);
  var reverseWordArray = [];
  var reversedString = '';
  for (var i = 0; i < wordArray.length; i++) {
    reverseWordArray.push(reverseWord(wordArray[i]));
  }
  for (i = 0; i < reverseWordArray.length; i++) {
    if (i > 0) {
      reversedString += ' ';
    }
    reversedString += reverseWordArray[i];
  }
  return reversedString;
}

function getWordArray(string) {
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

function reverseWord(string) {
  var reverseString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}

// Create a new empty array to hold each word in the string
//    push each word in string to the array
//      declare an empty string, word. Go through each letter in string,
//      for each letter, add it to variable word, if there is a space, push word to array, reset word
//      when loop reaches last letter, add it to the word and push the word to the array, then return the array
// For each word in the array, reverse the words and push them into a new array
// take the reversed word array and join them into a new empty string separated by a space
//    For first word in the array, do not add a space before each word
// return the new reversed string
