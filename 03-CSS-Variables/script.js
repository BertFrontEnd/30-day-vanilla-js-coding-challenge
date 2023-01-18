const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix,
  ); // определение имени свойства, его значения и установка стиля в html-теге
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate));
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate));
