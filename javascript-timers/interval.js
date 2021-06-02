var $h1 = document.querySelector('h1');

var countdownID = setInterval(beginCountDown, 1000, $h1);

function beginCountDown(h1) {
  var currentNum = parseInt(h1.textContent);
  h1.textContent = --currentNum;
  if (currentNum === 0) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}
