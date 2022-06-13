// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelector("#categories");

const listItems = Array.from(list.children);
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((element) => {
  let category = element.firstElementChild.textContent;
  let allElem = element.lastElementChild.children.length;
  console.log(`
    Category: ${category} 
   Elements: ${allElem}`);
});

