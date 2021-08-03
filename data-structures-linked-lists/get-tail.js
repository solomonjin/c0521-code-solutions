/* exported getTail */

function getTail(list) {
  let current = list;
  while (current.next) {
    current = current.next;
  }
  return current.data;
}
