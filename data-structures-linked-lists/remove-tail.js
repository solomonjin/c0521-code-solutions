/* exported removeTail */

function removeTail(list) {
  if (!list.next) return;

  let current = list;
  let previous;

  while (current.next) {
    previous = current;
    current = current.next;
  }
  previous.next = null;
}
