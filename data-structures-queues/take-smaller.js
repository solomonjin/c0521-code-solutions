/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) return;

  const first = queue.dequeue();
  if (queue.peek() === undefined) return first;

  const second = queue.dequeue();
  const smaller = first > second ? second : first;
  const bigger = first > second ? first : second;
  queue.enqueue(bigger);
  return smaller;
}
