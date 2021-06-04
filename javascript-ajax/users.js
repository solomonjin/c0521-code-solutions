var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', loadUsers);
xhr.send();

function loadUsers(event) {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var $newUser = document.createElement('li');
    $newUser.textContent = xhr.response[i].name;
    $userList.appendChild($newUser);
  }
}
