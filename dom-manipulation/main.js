var clickCount = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  clickCount++;
  $clickCount.textContent = clickCount;
  if (clickCount >= 16) $hotButton.className = 'hot-button nuclear';
  else if (clickCount >= 13) $hotButton.className = 'hot-button hot';
  else if (clickCount >= 10) $hotButton.className = 'hot-button warm';
  else if (clickCount >= 7) $hotButton.className = 'hot-button tepid';
  else if (clickCount >= 4) $hotButton.className = 'hot-button cool';
});
