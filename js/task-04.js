const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);  
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
let counterValue = 0;

buttonDecrement.addEventListener("click", handlerDecrement);
buttonIncrement.addEventListener("click", handlerIncrement); 


const valueRef = document.getElementById("value")


function handlerDecrement() {
  counterValue = 0;
  valueRef.innerHTML -=1 ;
}

function handlerIncrement() {
  valueRef.innerHTML = counterValue += 1;
  }

 