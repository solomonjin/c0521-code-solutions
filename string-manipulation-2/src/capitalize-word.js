/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') return 'JavaScript';
  var capitalWord = '';
  capitalWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalWord += word[i].toLowerCase();
  }
  return capitalWord;
}
