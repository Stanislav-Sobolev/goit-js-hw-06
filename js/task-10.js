function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("div#boxes");

createBtn.addEventListener("click", (event) => {
  createBoxes(inputValue.value)  
})
destroyBtn.addEventListener("click", () => {
  divBox.innerHTML = "";
  
})

function createBoxes(amount) {
  const arrBoxes = [];
  for (let i = 0; i <= amount; i++) {
    const createBox = document.createElement("div");
    createBox.style.width = `${i === 0 ? 30 : 30+(i * 10)}px`
    createBox.style.height = `${i === 0 ? 30 : 30+(i * 10)}px`
    createBox.style.backgroundColor = getRandomHexColor();

    arrBoxes.push(createBox);
  }
  divBox.append(...arrBoxes)
};





