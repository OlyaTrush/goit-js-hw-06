// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onTextInput);

const defaultValue = output.textContent;

function onTextInput(e) {
  if (e.currentTarget.value.length > 0) {
    output.textContent = e.currentTarget.value;
  } else {
    output.textContent = defaultValue;
  }
}
