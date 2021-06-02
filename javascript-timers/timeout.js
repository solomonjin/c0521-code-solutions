var $h1 = document.querySelector('h1');

setTimeout(changeHeader, 2000, $h1);

function changeHeader(h1) {
  h1.textContent = 'Hello There';
}
