const inputField = document.querySelector("input#name-input");
const spanName = document.querySelector("span#name-output");

inputField.addEventListener("input", (event) => {
if (event.currentTarget.value === '' ) {
    spanName.textContent = "Anonymous";
    }
else {
    spanName.textContent = event.currentTarget.value;
}
    

})

