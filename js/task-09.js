// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const nameColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor(e) {
  const color = getRandomHexColor();
  bodyColor.style.background = color;
  nameColor.textContent = color;
}
