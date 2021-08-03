/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;

  for (let i = 0; i < index; i++) {
    queue.enqueue(queue.dequeue());
  }
  return queue.dequeue();
}
