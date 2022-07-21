// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector("#validation-input");
const numberOfSymbols = Number(textInput.dataset.length);
console.log(numberOfSymbols);

textInput.addEventListener("blur", (e) => {
  if (e.target.value.length === numberOfSymbols) {
    textInput.classList.remove(`invalid`);
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove(`valid`);
  }
});
