
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
console.log(inputRef);

const boxesRef = document.querySelector("#boxes");

// Підключення кнопок
const buttonCreate = document.querySelector(`button[data-create]`);
const buttondestroy = document.querySelector(`button[data-destroy`);

// Ствоерння div
const createBoxes = () => {
  console.log(inputRef.value);
  let pixEl = 30;
  for (let i=0; i<inputRef.value; i+=1) {
    const size = pixEl + i*10;
    console.log(size);
    const color = getRandomHexColor();
    const createDiv = document.createElement("div");
    createDiv.style.width = size + "px"
    createDiv.style.height = size + "px"
    createDiv.style.background = color;
    boxesRef.append(createDiv)
    console.log(createDiv);
  }
};

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

 const destroyBoxes =() => {
  boxesRef.innerHTML = "";
 }

buttonCreate.addEventListener("click", createBoxes);
buttondestroy.addEventListener("click", destroyBoxes);
