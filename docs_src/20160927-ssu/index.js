const $form = document.getElementById('form');
const $text = document.getElementById('text');
const $lang = document.getElementById('lang');

$form.addEventListener('submit', (event) => {
  event.preventDefault();

  try {
    const ssu = new SpeechSynthesisUtterance();
    ssu.text = $text.value;
    ssu.lang = $lang.value;
    speechSynthesis.speak(ssu);
  } catch (err) {
    console.error(err);
  }
});

const $presets = document.getElementById('presets');

$presets.addEventListener('change', (event) => {
  const $this = event.target;
  const $selectedOption = $this.selectedOptions[0];

  $text.value = $selectedOption.value;
  $lang.value = $selectedOption.dataset.lang;

  $this.selectedIndex = 0;
});
