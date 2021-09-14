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

var $daysOfWeek = document.querySelector('.days-of-week');
var $days = document.querySelectorAll('buttons');
var $scheduleHeader = document.querySelector('#schedule-header');

$daysOfWeek.addEventListener('click', function (event) {
  for (var i = 0; i < $days.length; i++) {
    if ($days[i].textContent === event.target.textContent) {
      $scheduleHeader.textContent = 'Scheduled Events for Sunday';
    }
  }
})


var $table.document.querySelector('.table');

window.addEventListener('DOMContentLoaded', function (event) {
  $table
});
