const search = document.querySelector(".search")
const main = document.querySelector(".main")


function chalu(){
   
    search.style.display = "none"
  main.style.transform= "translate(0%)";
  searchRecipes()}


const API_ID = "be414dc1"
const API_KEY = "005ee2a03cc4b3eb52dafd3941627547"


async function searchRecipes() {
    const searchInput = document.querySelector(".search-input").value


    try {
        const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=${API_ID}&app_key=${API_KEY}`);
        const data = await response.json();

        data.hits.forEach(hit => {
            const recipe = hit.recipe;
            const ingri = document.querySelector(".ingri");

            const title = document.querySelector(".title h3");
            title.textContent = recipe.label;

            const ingredients = document.createElement("ul");
            ingri.appendChild(ingredients)
            recipe.ingredientLines.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                ingredients.appendChild(li);
            });

            const image = document.querySelector(".img-data");
            image.style.backgroundImage =`url( ${recipe.image})`;
            image.alt = recipe.label;

            const link = document.createElement("a");
            link.href = recipe.url; // URL for the recipe
            link.textContent = "View Recipe";

            link.innerHTML = `<i class="fa-solid fa-bowl-food"></i>`

            const full  = document.querySelector(".recipe")

            full.appendChild(link);

        });
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
    }
}


