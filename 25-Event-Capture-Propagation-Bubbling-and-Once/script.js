// Capturing // Bubbling // Propagation
// Погружение // Всплытие // Распространение

const divBlocks = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  console.log(e.eventPhase);
  /* e.stopPropagation(); // stop bubbling */
}

/* divBlocks.forEach((div) =>
  div.addEventListener('click', logText, { capture: true }),
); */

divBlocks.forEach((div) =>
  div.addEventListener('click', logText, { capture: false, once: true }),
);

/* divBlocks.forEach((div) => div.addEventListener('click', logText)); */

button.addEventListener(
  'click',
  () => {
    console.log('click');
  },
  { once: true },
);
