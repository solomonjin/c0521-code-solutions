/* exported includes */

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// Loop through array and see if value at each index matches value
//    if match, return true
// otherwise return false
