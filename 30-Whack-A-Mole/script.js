let lastHole;
let timeUp = false;
let active = false;
let score = 0;

const button = document.querySelector('button');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');

    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = '0';

  if (active) return;

  active = true;
  button.disabled = true;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => {
    active = false;
    button.disabled = false;
    timeUp = true;
  }, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!

  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', bonk));
moles.forEach((mole) => mole.addEventListener('touch', bonk));

button.addEventListener('click', startGame);
