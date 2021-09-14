var $form = document.querySelector('form');
var $popup = document.querySelector('.pop-up-container');
var $addEntryButton = document.querySelector('#add-entry-button');

$addEntryButton.addEventListener('click', function (event) {
  $popup.classList.remove('hidden');
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (event.target.matches('.submit-button')) {
    var $selectedDay = {};
    $selectedDay.days = $form.days.value;
    $selectedDay.time = $form.time.value;
    $selectedDay.description = $form.description.value;
  }

  // for (var daysIndex = 0; daysIndex < days.length; daysIndex++) {

  // }

  $popup.classList.add('hidden');

  $form.reset();
});

var $daysOfWeek = document.querySelector('.days-of-week');
var $days = document.querySelectorAll('button');
var $scheduleHeader = document.querySelector('#schedule-header');

$daysOfWeek.addEventListener('click', function (event) {
  for (var i = 0; i < $days.length; i++) {
    if ($days[i].textContent === event.target.textContent) {
      $scheduleHeader.textContent = 'Scheduled Events for ' + event.target.textContent;
    }
  }
});

// var $table.document.querySelector('.table');

// window.addEventListener('DOMContentLoaded', function (event) {
//  $table;
// });
