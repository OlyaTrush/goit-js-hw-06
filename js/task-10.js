// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor
//  для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numInput = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector(`#boxes`);

let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${width}px`;
    newDiv.style.height = `${height}px`;
    width += 10;
    height += 10;
    boxesContainer.append(newDiv);
    newDiv.style.backgroundColor = getRandomHexColor(amount);
  }
}

createBtn.addEventListener("click", () => {
  createBoxes(numInput.value);
});

function destroyBoxes() {
  boxesContainer.innerHTML = ``;
  numInput.value = '';
  width = 30;
  height = 30;
}

destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
});
