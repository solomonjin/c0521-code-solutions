/* exported chunk */

function chunk(array, size) {
  if (size > array.length) return [];
  var bigArray = [];
  var smallArray = [];
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (count === size) {
      count = 0;
      bigArray.push(smallArray);
      smallArray = [];
    }
    smallArray.push(array[i]);
    count++;
  }
  bigArray.push(smallArray);
  return bigArray;
}

// If size > array.length, return empty array
// create a new bigArray to hold the outer array
// create a new smallArray to hold inner array
// loop through given array
//    if count = size, reset count to 0, push small array into big, reset small array into empty array
//  push array at current index to smallArray and increment count
// push the remaining items inside smallArray into bigArray
// return bigArray
