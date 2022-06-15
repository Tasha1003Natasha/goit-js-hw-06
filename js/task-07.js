const inputSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputSize.addEventListener("input", handleInput);

function handleInput(event) {
   inputText.style.fontSize =  event.currentTarget.value + "px";
}

// Раніше було
// inputSize.addEventListener("input", (event) => {
//      inputText.style.fontSize = event.currentTarget.value + "px";
//   });




