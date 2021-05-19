function handleFocus(event) {
  console.log("'Focus' event was fired.");
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log("'Blur' event was fired.");
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

var $userName = document.forms[0].elements[0];
var $userEmail = document.forms[0].elements[1];
var $userMsg = document.querySelector('textArea');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMsg.addEventListener('focus', handleFocus);
$userMsg.addEventListener('blur', handleBlur);
$userMsg.addEventListener('input', handleInput);
