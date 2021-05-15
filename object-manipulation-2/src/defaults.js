/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

// Go through each property in source
// If property in source is not in target, create new property with
//    those values
