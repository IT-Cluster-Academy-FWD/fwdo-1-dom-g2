const $friendInput = document.querySelector('[name="friend"]');
const $friendsForm = document.getElementById('friends');
const $friendsList = document.querySelector('#shopping-list ul');
const $friendsDeleteButtons = document.querySelectorAll('#shopping-list li button');

for (const $listItem of $friendsDeleteButtons) {
  $listItem.addEventListener('click', function () {
    $listItem.parentElement.remove();
  });
}

$friendsForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if ($friendInput.value) {
    // creating new li element
    const $li = document.createElement('li');
    $li.innerText = $friendInput.value;

    // creating new button
    const $button = document.createElement('button');
    $button.innerText = 'x';

    // adding the button to li element
    $li.appendChild($button);

    // adding li with the button to the list of items
    $friendsList.appendChild($li);

    // cleaning the input
    $friendInput.value = '';

    // adding event listener to delete the li on click 
    $button.addEventListener('click', function () {
      $button.parentElement.remove();
    });
  }
});
