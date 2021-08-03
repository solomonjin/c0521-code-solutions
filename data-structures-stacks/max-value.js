/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const current = stack.pop();
    if (current > max) max = current;
  }
  return max;
}
