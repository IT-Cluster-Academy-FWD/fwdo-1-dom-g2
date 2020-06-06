const $dreamCar = document.getElementById('dream-car');
const $dreamCarButtons = document.querySelectorAll('#dream-cars li button');

console.log($dreamCar);
console.log($dreamCarButtons);

for (let $dreamCarItem of $dreamCarButtons) {
  $dreamCarItem.addEventListener('click', function (){
    $dreamCarItem.parentElement.style.color = "white";
    $dreamCarItem.parentElement.style.background = "blue";
  })
}