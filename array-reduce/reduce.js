function reduce(array, reducer, initialValue) {
  if (initialValue === null || initialValue === undefined) {
    initialValue = array[0];
    var i = 1;
  } else {
    i = 0;
  }
  let finalValue = initialValue;
  while (i < array.length) {
    finalValue = reducer(finalValue, array[i]);
    i++;
  }
  return finalValue;
}
