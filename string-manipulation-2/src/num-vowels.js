/* exported numVowels */

function numVowels(string) {
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (isVowel(string[i])) vowelCount++;
  }
  return vowelCount;
}

function isVowel(string) {
  return (string.toLowerCase() === 'a' || string.toLowerCase() === 'e' || string.toLowerCase() === 'i' || string.toLowerCase() === 'o' || string.toLowerCase() === 'u');
}

// Need something to keep count of vowels
// Go through each character in string
//   Check if character is vowel
//     if vowel, increment count
// return final count
