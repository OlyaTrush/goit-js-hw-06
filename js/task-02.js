const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const array = document.querySelector("#ingredients");

const newIngredients = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  return ingredientEl;
});

array.append(...newIngredients);
console.log(array);


