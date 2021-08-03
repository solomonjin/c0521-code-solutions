/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;

  let first = queue.dequeue();
  if (queue.peek() === undefined) return first;

  let second = queue.peek();

  while (first > second) {
    queue.enqueue(first);
    first = queue.dequeue();
    second = queue.peek();
  }
  return first;
}
