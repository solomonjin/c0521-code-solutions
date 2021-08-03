/* exported getLength */

function getLength(list) {
  let count = 1;
  let first = list;
  while (first.next) {
    count++;
    first = first.next;
  }
  return count;
}
