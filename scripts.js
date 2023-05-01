const engEventKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Backslash', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', 'Quote', 'Enter', 'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', 'Slash', 'ShiftRight', 'ControlLeft', 'Meta', 'AltLeft', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
const upperCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Delete', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
// create blocks textarea, keyboard
const textarea = document.createElement('textarea');
textarea.className = 'textarea';

document.body.prepend(textarea);

const keyboard = document.createElement('div');
keyboard.id = 'keyboard';

document.body.append(keyboard);

let CapsLock = false;

function init(arr) {
  let out = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 15 || i === 29 || i === 42 || i === 54) {
      out += '<div class="clearfix"></div>';
    }
    out += `<div class='k-key' data-symbol='${arr[i]}'> ${arr[i]} </div>`;
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init(engEventKey);

const CAPSLOCK = document.querySelector(".k-key[data-symbol='CapsLock'");
CAPSLOCK.classList.add('double');

const KEY = document.querySelectorAll('.k-key');

const deleteBgc = () => {
  KEY.forEach((element) => {
    element.classList.remove('active');
  });
};

document.addEventListener('keydown', (event) => {
  textarea.focus();
  engEventKey.forEach((item) => {
    if (item === event.key) {
      document.querySelector(`.k-key[data-symbol="${event.key}"]`).classList.add('active');
    } else if (item === event.code) {
      document.querySelector(`.k-key[data-symbol="${event.code}"]`).classList.add('active');
    }
  });
});

// document.addEventListener('keydown', (event) => {
//   // CAPSLOCK.classList.add('active');
//   if (event.code === 'CapsLock' && CapsLock) {
//     init(engEventKey);
//     CapsLock = false;
//   }
//   if (event.code === 'CapsLock' && !CapsLock) {
//     CapsLock = true;
//     init(upperCase);
//   }
// });

document.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    textarea.value += '  ';
  }
});

document.querySelectorAll('.k-key').forEach((element) => {
  element.addEventListener('click', (event) => {
    document.querySelectorAll('.k-key').forEach((element) => {
      element.classList.remove('active');
    });
    // let code = this.getAttribute('data');
    this.classList.add('active');
    console.log(this);
  });

});

document.addEventListener('keyup', () => {
  deleteBgc();
});

const SPACE = document.querySelector(".k-key[data-symbol=' ']");
SPACE.classList.add('space');

const leftArrow = document.querySelector(".k-key[data-symbol='ArrowLeft'");
leftArrow.classList.add('arrow');
leftArrow.innerText = '<';

const upArrow = document.querySelector(".k-key[data-symbol='ArrowUp'");
upArrow.classList.add('arrow');
upArrow.innerText = '^';
const downArrow = document.querySelector(".k-key[data-symbol='ArrowDown'");
downArrow.classList.add('arrow');
downArrow.innerText = 'v';

const rightArrow = document.querySelector(".k-key[data-symbol='ArrowRight'");
rightArrow.classList.add('arrow');
rightArrow.innerText = '>';

const leftCtrl = document.querySelector(".k-key[data-symbol='ControlLeft'");
leftCtrl.innerText = 'Ctrl';

const rightCtrl = document.querySelector(".k-key[data-symbol='ControlRight'");
rightCtrl.innerText = 'Ctrl';

const leftShift = document.querySelector(".k-key[data-symbol='ShiftLeft'");
leftShift.classList.add('double');
leftShift.innerText = 'Shift';

const rightShift = document.querySelector(".k-key[data-symbol='ShiftRight'");
rightShift.classList.add('double');
rightShift.innerText = 'Shift';

const ENTER = document.querySelector(".k-key[data-symbol='Enter'");
ENTER.classList.add('double');

const BACKSPACE = document.querySelector(".k-key[data-symbol='Backspace'");
BACKSPACE.classList.add('double');

const leftAlt = document.querySelector(".k-key[data-symbol='AltLeft'");
leftAlt.innerText = 'Alt';

const rightAlt = document.querySelector(".k-key[data-symbol='AltRight'");
rightAlt.innerText = 'Alt';

const BACKSLASH = document.querySelector(".k-key[data-symbol='Backslash'");
BACKSLASH.innerText = '\\';

const SLASH = document.querySelector(".k-key[data-symbol='Slash'");
SLASH.innerText = '/';

const QUOTE = document.querySelector(".k-key[data-symbol='Quote'");
QUOTE.innerText = "'";
