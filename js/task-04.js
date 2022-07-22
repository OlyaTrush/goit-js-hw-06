//  * Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// * Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// * Оновлюй інтерфейс новим значенням змінної counterValue.

// const counterValue = document.querySelector("#value");
// const addBtn = document.querySelector('[data-action="increment"]');
// const subBtn = document.querySelector('[data-action="decrement"]');

// addBtn.addEventListener("click", onAddBtn);
// function onAddBtn() {
//   counterValue.textContent = ++counterValue.textContent;
 
// }

// subBtn.addEventListener("click", onSubBtn);
// function onSubBtn() {
//   counterValue.textContent = --counterValue.textContent;

// }


const btns = document.querySelectorAll('button');
const counterValue = document.querySelector("#value");

btns.forEach(btn => {
  btn.addEventListener('click',  () => {
      const direction = btn.dataset.action;
      const currentValue = +counterValue.textContent;
      let newValue;

      if (direction === 'increment') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      counterValue.textContent = newValue;
    })
})