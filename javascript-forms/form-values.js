var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formObject = {};
  for (var i = 0; i < $contactForm.elements.length; i++) {
    formObject[$contactForm.elements[i].name] = $contactForm.elements[i].value;
  }
  console.log(formObject);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
