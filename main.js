let recipesContainer = document.getElementById("recipesContainer");
let btnPizza = document.getElementById("pizza");
let btnBurger = document.getElementById("burger");
let btnPasta = document.getElementById("pasta");
let btnSalad = document.getElementById("salad");
let btnsearch = document.getElementById("search");
let input = document.getElementById("input");
function fetchRecipes(food) {
  recipesContainer.innerHTML = `
        <div class="loader">Loading delicious recipes...🔍</div>`;
}

function fetchRecipes(food) {
  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}`)
    .then((response) => response.json())
    .then((result) => {
      let data = result.data.recipes;
      console.log(data);
      recipesContainer.innerHTML;
      data.forEach((recipe) => {
        recipesContainer.innerHTML += `
                <div class="recipe-card">
                    <img src="${recipe.image_url}" alt="" class="recipe-img" />
                    <div class="recipe-info">
                        <div>
                            <h3 class="recipe-title">${recipe.title}</h3>
                            <p class="recipe-publisher">by: ${recipe.publisher}</p>
                        </div>

                        <a href="#" target="_blank" class="btn-view">
                            View Recipe
                        </a>
                    </div>
                </div>
                `;
      });
    });
}

btnPizza.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("pizza");
});

btnBurger.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("Burger");
});

btnPasta.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("pasta");
});

btnSalad.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("salad");
});
btnsearch.addEventListener("click", function () {
  fetchRecipes(input.value);
});
