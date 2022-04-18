const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listSelector = document.querySelector("#ingredients");

const createdList = ingredients.map( ingredient => {    
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add = "item";
  
  return element;
})

listSelector.append(...createdList);