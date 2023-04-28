const symbols = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р',
  'о', 'л', 'д', 'ж', 'э', '\\', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.',
  'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Ctrl', 'Alt', 'Ctrl', 'Left', 'Up', 'Down', 'Right'];

const textarea = document.createElement('textarea');
textarea.className = 'textarea';

document.body.prepend(textarea);

const keyboard = document.createElement('div');
keyboard.id = 'keyboard';

document.body.append(keyboard);

function init() {
  let out = '';
  for (let i = 0; i < symbols.length; i += 1) {
    if (i % 14 === 0) {
      out += '<div class="clearfix"></div>';
    }
    out += `<div class='k-key' data-symbol='${symbols[i]}'> ${symbols[i]} </div>`;
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

const KEY = document.querySelectorAll('.k-key');

const deleteBgc = () => {
  KEY.forEach((element) => {
    element.classList.remove('active');
  });
};



document.addEventListener('keydown', (event) => {
  deleteBgc();
  textarea.focus();
  console.log(event.key);
  document.querySelector(`.k-key[data-symbol="${event.key}"]`).classList.add('active');
});

document.addEventListener('keyup', () => {
  deleteBgc();
}); 