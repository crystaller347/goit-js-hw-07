const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);
const titles = document.querySelectorAll("h2");
titles.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    const category = title.parentElement;
    const elements = category.querySelectorAll("ul > li");
    console.log(`Elements: ${elements.length}`);
});
