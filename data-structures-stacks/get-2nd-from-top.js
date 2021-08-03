/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const last = stack.pop();
  if (last === undefined) return undefined;

  const secondLast = stack.peek();
  if (secondLast === undefined) {
    stack.push(last);
    return secondLast;
  }

  stack.push(last);
  return secondLast;
}
