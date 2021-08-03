/* exported swapFront */

function swapFront(list) {
  if (!list.next) return list;

  const second = list.next;
  list.next = second.next;
  second.next = list;
  return second;
}
