const boxesContainer = document.querySelector("#boxes");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
    destroyBoxes();
    let boxSize = 30;
    const allBoxes = [];
    if (1 <= amount && amount <= 100) {
      for (let i = 1; i <= amount; i += 1) {
        let box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
        boxSize += 10;
        allBoxes.push(box);
      };
    };
    input.value = "";
    const boxesHtml = allBoxes.join("");
    boxesContainer.insertAdjacentHTML("afterbegin", boxesHtml);
    return boxesContainer;
};

function destroyBoxes() {
    boxesContainer.innerHTML = "";
};

buttonCreate.addEventListener("click", function () { createBoxes(input.value) });
buttonDestroy.addEventListener("click", destroyBoxes);