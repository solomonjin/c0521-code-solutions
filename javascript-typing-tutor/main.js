var $characterList = document.querySelectorAll('span');
var $accuracy = document.querySelector('p');
var $replay = document.querySelector('.replay');
var totalPresses = 0;
var numOfMistakes = 0;
var i = 0;
$characterList[i].className = 'current-letter';

function handleKeyPress(event) {
  if (event.key === $characterList[i].textContent) {
    $characterList[i].className = 'green';
    i++;
    totalPresses++;
    if (i === $characterList.length) {
      $accuracy.textContent = 'Accuracy: ' + Math.floor(((totalPresses - numOfMistakes) / totalPresses) * 100) + '%';
      $accuracy.className = 'accuracy show';
      $replay.className = 'replay show';
    } else $characterList[i].className = 'current-letter';
  } else {
    $characterList[i].className = 'current-letter red';
    numOfMistakes++;
    totalPresses++;
  }
}

function replay(event) {
  $accuracy.className = 'accuracy';
  $replay.className = 'replay';
  while (i > 0) {
    $characterList[i - 1].className = '';
    i--;
  }
  $characterList[i].className = 'current-letter';
}

$replay.addEventListener('click', replay);
window.addEventListener('keydown', handleKeyPress);

// Query the document for ALL span elements
// For the FIRST element in NodeList assign it the class (current-letter)
// Iterate through the span NodeList. While i < nodeList.length:
//    assign the current span the class: current-letter
//    If event.key === current element's textContent, assign it class 'green' and increment i
//    else: assign class 'red'

//
// Create a mistakes counter variable as well as total keypresses variable
// Every time the className of a span has to get set to red, increment it by one
// increment the total keypresses variable when the user either types accurately or inputs an error
// Once i reaches the length of the NodeList, get the user's typing accuracy
//    (totalPresses - numOfMistakes) / totalPresses
