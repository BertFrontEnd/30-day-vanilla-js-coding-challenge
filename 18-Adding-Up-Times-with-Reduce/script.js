const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const secondsAll = timeNodes
  .map((node) => {
    const [mins, secs] = node.dataset.time.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = secondsAll;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const seconds = secondsLeft;

console.log(hours, minutes, seconds);
