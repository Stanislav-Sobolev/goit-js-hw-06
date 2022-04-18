let counterValue = 0;

const value = document.querySelector("#value");

const increase = document.querySelector('button[data-action="increment"]');

const decrease = document.querySelector('button[data-action="decrement"]');


increase.addEventListener("click", () => {
    counterValue += 1
    value.textContent = counterValue;
});

decrease.addEventListener("click", () => {
    counterValue -= 1
    value.textContent = counterValue;
});