const inputSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputSize.addEventListener("input", handleInput);

inputText.style.fontSize =  inputSize.value + "px";

function handleInput(event) {
   inputText.style.fontSize =  event.currentTarget.value + "px";
}





