// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);  
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
let counterValue = 0;

buttonDecrement.addEventListener("click", handlerDecrement);
buttonIncrement.addEventListener("click", handlerIncrement); 


function handlerDecrement() {
  counterValue = 0;
  document.getElementById("value").innerHTML = --counterValue;
}

function handlerIncrement() {
  document.getElementById("value").innerHTML = ++counterValue;
  }

