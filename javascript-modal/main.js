var $modalButton = document.querySelector('.modal-button');
var $modalBox = document.querySelector('.modal');
var $modalOverlay = document.querySelector('.modal-overlay');
var $noButton = document.querySelector('.no-button');

function openModal(event) {
  $modalBox.className = 'modal';
  $modalOverlay.className = 'modal-overlay';
}

function closeModal(event) {
  $modalBox.className = 'modal hide';
  $modalOverlay.className = 'modal-overlay hide';
}

$modalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);

// Query document for modal button, modal, modal overlay, no button
// Add event listener to button. If user clicks button,
//    set both properties to display: block by adding another class name to them

// Add event listener to no button. If user clicks button,
// set display properties of modal and modal overlay to none
