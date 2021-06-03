var $imageViews = document.querySelectorAll('.image-container');
var $imageRow = document.querySelector('.image-row');
var $dotContainer = document.querySelector('.dot-container');
var $dotList = $dotContainer.children;

$dotContainer.addEventListener('click', clickDot);
$imageRow.addEventListener('click', clickArrow);
var imageTimer = setInterval(clickRightArrow, 3000);

function clickDot(event) {
  if (event.target.tagName !== 'I') return;

  var dataView = changeDot(event.target);
  switchView(dataView);
}

function changeDot(element) {
  for (var i = 0; i < $dotList.length; i++) {
    if ($dotList[i] !== element) {
      $dotList[i].className = 'dot far fa-circle';
    }
  }
  element.className = 'dot fas fa-circle';
  return element.getAttribute('data-view');
}

function switchView(view) {
  for (var i = 0; i < $imageViews.length; i++) {
    if ($imageViews[i].getAttribute('data-view') !== view) $imageViews[i].className = 'image-container hidden';
    else $imageViews[i].className = 'image-container current';
  }
}

function clickArrow(event) {
  if (event.target.tagName !== 'I') return;

  if (event.target.className === 'arrow fas fa-chevron-left') {
    clickLeftArrow();
  }

  if (event.target.className === 'arrow fas fa-chevron-right') {
    clickRightArrow();
  }
}

function getCurrentImage() {
  return document.querySelector('.current');
}

function findCurrentDot(view) {
  for (var i = 0; i < $dotList.length; i++) {
    if ($dotList[i].getAttribute('data-view') === view) return $dotList[i];
  }
}

function clickLeftArrow() {
  var $currentImage = getCurrentImage();
  var $previousImage = $currentImage.previousElementSibling;
  if ($previousImage) {
    switchView($previousImage.getAttribute('data-view'));
    changeDot(findCurrentDot($previousImage.getAttribute('data-view')));
  } else {
    var $lastImage = $imageViews[$imageViews.length - 1];
    switchView($lastImage.getAttribute('data-view'));
    changeDot(findCurrentDot($lastImage.getAttribute('data-view')));
  }
  resetTimer();
}

function clickRightArrow(currentImage) {
  var $currentImage = getCurrentImage();
  var $nextImage = $currentImage.nextElementSibling;
  if ($nextImage) {
    switchView($nextImage.getAttribute('data-view'));
    changeDot(findCurrentDot($nextImage.getAttribute('data-view')));
  } else {
    var $firstImage = $imageViews[0];
    switchView($firstImage.getAttribute('data-view'));
    changeDot(findCurrentDot($firstImage.getAttribute('data-view')));
  }
  resetTimer();
}

function resetTimer() {
  clearInterval(imageTimer);
  imageTimer = setInterval(clickRightArrow, 3000);
}
