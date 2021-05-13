/* exported countdown */

function countdown(number) {
  var result = [];
  for (var i = number; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
