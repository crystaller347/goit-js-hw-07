const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    destroyBoxes();
    amount = input.value;
    let boxSize = 30;
    const allBoxes = [];
    if (1 <= input.value && input.value <= 100) {
      for (let i = 1; i <= amount; i += 1) {
        let box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
        boxSize += 10;
        allBoxes.push(box);
      };
    };
    input.value = "";
    const boxesHtml = allBoxes.join("");
    boxes.insertAdjacentHTML("afterbegin", boxesHtml);
    return boxes;
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);