var $form = document.querySelector('form');
var $popup = document.querySelector('.pop-up-container');

$form.addEventListener('click', function (event) {
  if (event.target.matches('#add-entry-button')) {
    $popup.classList.remove('hidden');
  }
});
