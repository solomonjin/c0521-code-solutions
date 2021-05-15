/* exported titleCase */

function titleCase(title) {
  var wordList = getWords(title);
  var capitalWordList = [];
  for (var i = 0; i < wordList.length; i++) {
    if (i === 0) capitalWordList.push(capitalizeWord(wordList[i]));
    else if (wordList[i - 1][wordList[i - 1].length - 1] === ':') capitalWordList.push(capitalizeWord(wordList[i]));
    else if (wordList[i].length < 4 && isMinorWord(wordList[i])) capitalWordList.push(wordList[i]);
    else if (wordList[i].includes('-')) capitalWordList.push(containsHyphen(wordList[i]));
    else capitalWordList.push(capitalizeWord(wordList[i]));
  }
  var titleString = '';
  for (i = 0; i < capitalWordList.length; i++) {
    if (i > 0) titleString += ' ';
    titleString += capitalWordList[i];
  }
  return titleString;
}

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

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') return 'JavaScript';
  if (word.toLowerCase() === 'javascript:') return 'JavaScript:';
  if (word.toLowerCase() === 'api') return 'API';
  var capitalWord = '';
  capitalWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalWord += word[i].toLowerCase();
  }
  return capitalWord;
}

function isMinorWord(string) {
  if (string === 'a' || string === 'an' || string === 'the' || string === 'and' || string === 'or' || string === 'nor' || string === 'but' ||
    string === 'as' || string === 'at' || string === 'by' || string === 'for' || string === 'in' || string === 'of' || string === 'on' ||
    string === 'per' || string === 'to') {
    return true;
  }
  return false;
}

function containsHyphen(string) {
  var splitString = string.split('-');
  var capitalArray = [];
  for (var i = 0; i < splitString.length; i++) {
    capitalArray.push(capitalizeWord(splitString[i]));
  }
  return capitalArray.join('-');
}

// Separate each word in the title into a new array
// Create a second empty array to hold capitalized words
// Go through each word in the array
//    if it's the first word in the array, capitalize it and push it
//    if it's not the first index and the previous word had a semicolon at the end: capitalize current word and push it to capital array
//    if the length of the word is < 4 and is a minor word, do NOT capitalize word and push it
//    if word contains hyphen, special case (below)
//    else, capitalize the word and push it
// go through capitalized array and combine each word into a new string (titleString)
// return titleString

// If word contains hyphen, split word by hyphen and assign it to an array
// Take each word in the array and capitalize each and push them into a new array
// join the array together and return
