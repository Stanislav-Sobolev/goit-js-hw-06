const submitBtn = document.querySelector("form.login-form");


submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();

     
    if (event.currentTarget.elements.password.value === "" || event.currentTarget.elements.email.value === ""){
        alert("Все поля должны быть заполнены!")
    } else {

    const {email, password} = event.currentTarget.elements;


    const userData = {
    email: email.value,
    password: password.value,
    };

    console.log(userData);
    event.currentTarget.reset();
}})
