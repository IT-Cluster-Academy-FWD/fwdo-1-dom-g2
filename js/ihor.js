const $dreamCar = document.getElementById('dream-car');
const $dreamCarButtons = document.querySelectorAll('#dream-car li button')

for ($dreamCarItem of $dreamCar) {
  $dreamCarItem.addEventListener('click', function() {
    $dreamCarItem.parentElement.remove();
  });
}