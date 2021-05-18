/* exported zip */

function zip(first, second) {
  if (first.length <= second.length) {
    var shortArray = first;
  } else {
    shortArray = second;
  }
  var arrayPair = [];
  for (var i = 0; i < shortArray.length; i++) {
    var newArray = [];
    newArray.push(first[i], second[i]);
    arrayPair.push(newArray);
  }
  return arrayPair;
}

// Compare lengths of first and second and assign whichever is shorter to a new array
// Create a new empty outer array
// Loop through the arrays up until the length of the shorter array
//    Create a empty array within loop
//    push item from same index number into empty array
//    push small array into outer array
// return outer array
