
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



