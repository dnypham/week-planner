var $form = document.querySelector('form');
var $popup = document.querySelector('.pop-up-container');
var $addEntryButton = document.querySelector('#add-entry-button');

$addEntryButton.addEventListener('click', function (event) {
  $popup.classList.remove('hidden');
});

$form.addEventListener('click', function (event) {
  if (event.target.matches('.submit-button')) {
    event.preventDefault();
    $popup.classList.add('hidden');
  }
});
