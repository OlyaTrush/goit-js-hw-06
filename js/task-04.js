//  * Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// * Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// * Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = document.querySelector("#value");
const addBtn = document.querySelector('[data-action="increment"]');
const subBtn = document.querySelector('[data-action="decrement"]');

addBtn.addEventListener("click", onAddBtn);
function onAddBtn() {
  counterValue.textContent = ++counterValue.textContent;
 
}

subBtn.addEventListener("click", onSubBtn);
function onSubBtn() {
  counterValue.textContent = --counterValue.textContent;

}
