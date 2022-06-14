function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body")
const buttonRef = document.querySelector(".change-color");
const backgroundRef = document.querySelector(".color");

const handleClick = () => {
  const color = getRandomHexColor();
  bodyRef.style.background = color;
  backgroundRef.textContent = color;
};

buttonRef.addEventListener("click", handleClick);


