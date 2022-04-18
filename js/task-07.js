const inputField = document.querySelector("input#font-size-control");
const textField = document.querySelector("span#text");

inputField.addEventListener("input", (event) => {
textField.style.fontSize = `${event.currentTarget.value}px`;
});
