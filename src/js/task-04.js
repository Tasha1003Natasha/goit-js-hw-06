// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
console.log(buttonDecrement);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
console.log(buttonIncrement);
let counterValue = 0;

buttonDecrement.addEventListener("click", handlerDecrement);
buttonIncrement.removeEventListener("click", handlerIncrement); 

function handlerClick(event) {
  console.log(event.target);
  const target = event.target;
}

// function reset(event) {
//   console.log(event.target);
//   counterValue -= 1; 
//   }


