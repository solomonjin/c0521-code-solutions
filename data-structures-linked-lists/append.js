/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const newList = new LinkedList(value);
  let current = list;
  while (current.next) {
    current = current.next;
  }
  current.next = newList;
}
