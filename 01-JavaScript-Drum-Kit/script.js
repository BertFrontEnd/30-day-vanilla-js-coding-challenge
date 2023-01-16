// Проигрывание звука и добавление анимации для клавиши
function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); // поиск звука, соответствующего нажатой клавише по ее keyCode в HTML
  if (!audio) return; // завершение выполнения функции, если нажата клавиша отличная от указанной в HTML
  audio.currentTime = 0; // начала проигрывания звука при каждом нажатии клавиши
  audio.play(); // запуск звука

  const key = document.querySelector(`.key[data-key='${e.keyCode}']`); // поиск клавиши, соответствующей нажатой по ее keyCode в HTML
  key.classList.add('playing'); // добавление класса к нажатой клавише
}

// Удаление класса у клавиши
function removeTransition(e) {
  if (e.propertyName != 'transform') return; // завершение выполнения функции, если имя propertyName события не 'transform'
  this.classList.remove('playing'); // удаление класса у нажатой клавиши

  // подстраховка: удаление класса у нажатой клавиши через 1 секунду, если клавиша была нажата очень долгое время
  setTimeout(() => {
    this.classList.remove('playing');
  }, 1000);
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
