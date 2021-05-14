/* exported capitalizeWords */

function capitalizeWords(string) {
  var words = string.split(' ');
  var capitalWords = '';
  for (var i = 0; i < words.length; i++) {
    if (i > 0) {
      capitalWords += ' ';
    }
    capitalWords += capitalizeWord(words[i]);
  }
  return capitalWords;
}

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') return 'JavaScript';
  var capitalWord = '';
  capitalWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalWord += word[i].toLowerCase();
  }
  return capitalWord;
}
