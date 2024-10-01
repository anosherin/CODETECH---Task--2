const recipeNameInput = document.getElementById('recipe-name-input');
const ingredientsInput = document.getElementById('ingredients-input');
const instructionsInput = document.getElementById('instructions-input');
const addRecipeBtn = document.getElementById('add-recipe-btn');
const recipeList = document.getElementById('recipe-list');

const recipes = [];

addRecipeBtn.addEventListener('click', () => {
    const recipeName = recipeNameInput.value;
    const ingredients = ingredientsInput.value.split('\n');
    const instructions = instructionsInput.value.split('\n');

    if (recipeName && ingredients.length > 0 && instructions.length > 0) {
        recipes.push({ name: recipeName, ingredients: ingredients, instructions: instructions });
        renderRecipes();
        clearInputs();
    }
});

function renderRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe) => {
        const li = document.createElement('li');
        li.textContent = recipe.name;
        li.setAttribute('data-ingredients', recipe.ingredients.join('\n'));
        li.setAttribute('data-instructions', recipe.instructions.join('\n'));
        recipeList.appendChild(li);
    });
}

function clearInputs() {
    recipeNameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
}

// Add event listener to recipe list items for expansion/collapse
recipeList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li) {
        const ingredients = li.getAttribute('data-ingredients');
        const instructions = li.getAttribute('data-instructions');

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('recipe-details');
        detailsDiv.innerHTML = `
            <strong>Ingredients:</strong><br>
            <ul>
                ${ingredients.split('\n').map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <br>
            <strong>Instructions:</strong><br>
            <ol>
                ${instructions.split('\n').map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;

        li.appendChild(detailsDiv);

        // Toggle visibility of details div
        detailsDiv.style.display = detailsDiv.style.display === 'block' ? 'none' : 'block';
    }
});
function clearInputs() {
    recipeNameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
}
// ... (existing JavaScript code)

// Add event listener to recipe list items for expansion/collapse
recipeList.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li) {
        const ingredients = li.getAttribute('data-ingredients');
        const instructions = li.getAttribute('data-instructions');

        const detailsDiv = document.createElement('div');
        detailsDiv.innerHTML = `
            <strong>Ingredients:</strong><br>
            ${ingredients.replace(/\n/g, '<br>')}
            <br>
            <strong>Instructions:</strong><br>
            ${instructions.replace(/\n/g, '<br>')}
        `;

        li.appendChild(detailsDiv);

        // Toggle visibility of details div
        detailsDiv.style.display = detailsDiv.style.display === 'block' ? 'none' : 'block';
    }
});