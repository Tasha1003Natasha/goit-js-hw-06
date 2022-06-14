const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
const symbolInput = Number(textInput.dataset.length);
const inputDataLength = textInput.value.length;

   if (symbolInput  === inputDataLength) {
    textInput.classList.add("valid")
    textInput.classList.remove("invalid")
   } else {
    textInput.classList.add("invalid")
    textInput.classList.remove("valid")
   }
});

