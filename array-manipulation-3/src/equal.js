/* exported equal */

function equal(first, second) {
  if (first.length !== second.length) return false;
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return false;
  }
  return true;
}

// Check to see if their lenghts are different, if so, return false
// Loop through the first array, for each index check to see if value at index is same in both first and second array
// If not, return false
// return true at end of loop
