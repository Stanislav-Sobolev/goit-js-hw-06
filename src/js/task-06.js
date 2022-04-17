const inputSelect = document.querySelector("#validation-input");

inputSelect.addEventListener("blur", (event) => {
    
    
        
    if (event.currentTarget.value.length === Number(inputSelect.dataset.length)){
        inputSelect.classList.remove("invalid")
        inputSelect.classList.add("valid")
        
        
    }
    else {
        inputSelect.classList.remove("valid")
        inputSelect.classList.add("invalid")
    }
})