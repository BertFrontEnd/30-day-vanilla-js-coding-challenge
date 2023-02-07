const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const error = document.querySelector('.error');

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    error.textContent = `${err}`;
  },
);
