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

