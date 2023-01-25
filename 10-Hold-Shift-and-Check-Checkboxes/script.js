const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // проверяем, была ли у checkbox нажата клавиша Shift
  // И проверяем, что checkbox был состоянии checked
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // идем дальше и делаем, что хотим
    // цикл по каждому отдельному флажку
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck),
);
