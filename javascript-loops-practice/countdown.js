/* exported countdown */

function countdown(number) {
  var result = [];
  for (var i = number; i >= 0; i = i - 1) {
    result.push(i);
  }
  return result;
}
