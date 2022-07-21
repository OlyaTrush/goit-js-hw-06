// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const slider = document.querySelector("#font-size-control");

const textSize = document.querySelector("#text");

textSize.style.fontSize = `${slider.value}px`;

slider.addEventListener("input", (e) => {
  textSize.style.fontSize = `${e.target.value}px`;
});
