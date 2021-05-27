var $navToggleButton = document.querySelector('.nav-toggle');

$navToggleButton.addEventListener('click', toggleNav);

function toggleNav(event) {
  var $navList = document.querySelector('.nav-list');
  $navList.classList.toggle('active');
}
