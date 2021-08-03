/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) return;

  const first = queue.dequeue();
  if (queue.peek() === undefined) return first;

  queue.enqueue(first);
  return queue.dequeue();
}
