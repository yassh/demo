'use strict';

var $form = document.getElementById('form');
var $text = document.getElementById('text');
var $lang = document.getElementById('lang');

$form.addEventListener('submit', function (event) {
  event.preventDefault();

  try {
    var ssu = new SpeechSynthesisUtterance();
    ssu.text = $text.value;
    ssu.lang = $lang.value;
    speechSynthesis.speak(ssu);
  } catch (err) {
    console.error(err);
  }
});

var $presets = document.getElementById('presets');

$presets.addEventListener('change', function (event) {
  var $this = event.target;
  var $selectedOption = $this.selectedOptions[0];

  $text.value = $selectedOption.value;
  $lang.value = $selectedOption.dataset.lang;

  $this.selectedIndex = 0;
});