const button = document.querySelector(".change-color");
const span = document.querySelector("span.color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", (event) => {
    body.style.backgroundColor = getRandomHexColor();
    span.textContent = getRandomHexColor();
});