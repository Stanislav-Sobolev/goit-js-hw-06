function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("div#boxes");

createBtn.addEventListener("click", (event) => {
  createBoxes(inputValue.value)  
});

destroyBtn.addEventListener("click", () => {
  divBox.innerHTML = "";
  arrBoxes.length = 0;
  });


const arrBoxes = [];

function createBoxes(amount) {  
  
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");
        
    if (arrBoxes.length === 0) {
      createBox.style.width = `30px`
      createBox.style.height = `30px`
    } else {
      const lastIndexArr = arrBoxes.length - 1;
      
      createBox.style.width = `${parseInt(arrBoxes[lastIndexArr].style.width) + 10}px`
      createBox.style.height = `${parseInt(arrBoxes[lastIndexArr].style.height) + 10}px`
    }
    
    createBox.style.backgroundColor = getRandomHexColor();

    arrBoxes.push(createBox);
    
  }
  divBox.append(...arrBoxes)
};


