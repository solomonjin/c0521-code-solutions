var $characterList = document.querySelectorAll('span');

var i = 0;
$characterList[i].className = 'current-letter';

function handleKeyPress(event) {
  if (event.key === $characterList[i].textContent) {
    $characterList[i].className = 'green';
    i++;
    $characterList[i].className = 'current-letter';
  } else {
    $characterList[i].className = 'current-letter red';
  }
}

window.addEventListener('keydown', handleKeyPress);

// Query the document for ALL span elements
// For the FIRST element in NodeList assign it the class (current-letter)
// Iterate through the span NodeList. While i < nodeList.length:
//    assign the current span the class: current-letter
//    If event.key === current element's textContent, assign it class 'green' and increment i
//    else: assign class 'red'
