// 1.1 Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoryEl = document.querySelectorAll("li.item");
console.log("Number of categories:", categoryEl.length);

// 1.2 Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль
// текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

categoryEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
