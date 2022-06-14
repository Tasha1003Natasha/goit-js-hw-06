const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listAll = document.querySelector("#ingredients")

const listIngredients = ingredients.map((ingredient, id) => {
const ingredientsArr = document.createElement("li")
ingredientsArr.textContent = ingredient;
ingredientsArr.classList.add("item")
ingredientsArr.setAttribute("id", id);
listAll.append(ingredientsArr);
});


