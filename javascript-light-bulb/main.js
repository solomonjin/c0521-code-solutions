var $lightSwitch = document.querySelector('.bulb');
var $background = document.querySelector('body');

function handleClick(event) {
  if ($background.className === 'dark') {
    $lightSwitch.className = 'bulb light-bulb';
    $background.className = 'light';
  } else if ($background.className === 'light') {
    $lightSwitch.className = 'bulb dark-bulb';
    $background.className = 'dark';
  }
}

$lightSwitch.addEventListener('click', handleClick);

// Query the document for the button element and the body
// Add an event listener for the button
// When the button is clicked, check if bulb is on/off
//    If bulb is off: change class of button to "light-bulb" and class of body to "light"
//    If bulb is on: change class of button to "dark-bulb" and class of body to "dark"
