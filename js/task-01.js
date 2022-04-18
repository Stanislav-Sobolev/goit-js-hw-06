const ulCategories = document.querySelectorAll("ul#categories > li.item")

console.log(`Number of categories: ${ulCategories.length}`);

const textHeader = document.querySelectorAll("h2");

const categoriesArr = document.querySelectorAll("ul#categories li.item ul");


const r = ulCategories.forEach(el => {
    console.log("Category:", el.firstElementChild.textContent);
    console.log("Elements:", el.lastElementChild.children.length);
})


// Alternative variant:
// for (let i = 0; i < ulCategories.length; i++) {
//     console.log("Category:", textHeader[i].textContent);
//     console.log("Elements:", categoriesArr[i].children.length);
    
// }
