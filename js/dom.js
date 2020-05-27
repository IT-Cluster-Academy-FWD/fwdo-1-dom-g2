const $button = document.getElementById('cool-button');

$button.setAttribute("class", "btn-main")

console.log($button.getAttribute("class"));

const shoppingList = [];

const $shoppingListItems = document.querySelectorAll("#shopping-list li");

console.log($shoppingListItems);

for (const $item of $shoppingListItems) {
  $item.style.backgroundColor = "black";
  $item.style.color = "white";
  shoppingList.push($item.innerText);
}

console.log(shoppingList)

const $friendsListItem = document.getElementsByClassName("friend")

for (const $friend of $friendsListItem) {
  console.log($friend.innerText)
}