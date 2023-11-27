document.addEventListener('DOMContentLoaded', function () {
  // Sample data for illustration
  const recipes = [
    { id: 1, title: 'Spaghetti Bolognese', ingredients: 'Ground beef, tomatoes, onion, garlic, spaghetti', instructions: 'Cook the spaghetti; brown the beef; mix together.' },
    { id: 2, title: 'Chicken Stir-Fry', ingredients: 'Chicken breast, broccoli, soy sauce, ginger, garlic', instructions: 'Stir-fry chicken and vegetables; add soy sauce and spices.' },
  ];

  // Function to display recipes
  function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.innerHTML = <h3>${recipe.title}</h3><p>${recipe.ingredients}</p><p>${recipe.instructions}</p><button onclick="editRecipe(${recipe.id})">Edit</button><button onclick="deleteRecipe(${recipe.id})">Delete</button>;
      recipeList.appendChild(recipeItem);
    });
  }

  // Function to add or edit a recipe
  function addEditRecipe(title, ingredients, instructions, id) {
    if (id) {
      // Edit existing recipe
      const index = recipes.findIndex(recipe => recipe.id === id);
      recipes[index] = { id, title, ingredients, instructions };
    } else {
      // Add new recipe
      const newRecipe = { id: recipes.length + 1, title, ingredients, instructions };
      recipes.push(newRecipe);
    }

    displayRecipes();
    clearForm();
  }

  // Function to delete a recipe
  function deleteRecipe(id) {
    const index = recipes.findIndex(recipe => recipe.id === id);
    recipes.splice(index, 1);
    displayRecipes();
  }

  // Function to populate form for editing
  function editRecipe(id) {
    const recipe = recipes.find(recipe => recipe.id === id);
    document.getElementById('recipe-title').value = recipe.title;
    document.getElementById('recipe-ingredients').value = recipe.ingredients;
    document.getElementById('recipe-instructions').value = recipe.instructions;
    document.getElementById('recipe-id').value = id;
  }

  // Function to clear the form
  function clearForm() {
    document.getElementById('recipe-form').reset();
  }

  // Display initial recipes
  displayRecipes();

  // Event listener for form submission
  document.getElementById('recipe-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('recipe-title').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;
    const id = document.getElementById('recipe-id').value;
    addEditRecipe(title, ingredients, instructions,id);
  });
});
