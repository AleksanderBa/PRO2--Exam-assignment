import React, { useState, useEffect } from 'react';

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [editingRecipe, setEditingRecipe] = useState(null);

  
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setRecipes(storedRecipes);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
  }, [recipes]);

  const handleAddRecipe = () => {
    if (recipeName && recipeIngredients) {
      const newRecipe = {
        id: Date.now(),
        name: recipeName,
        ingredients: recipeIngredients,
      };
      setRecipes([...recipes, newRecipe]);
      setRecipeName('');
      setRecipeIngredients('');
    }
  };

  const handleUpdateRecipe = () => {
    if (recipeName && recipeIngredients && editingRecipe) {
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === editingRecipe.id
          ? { ...recipe, name: recipeName, ingredients: recipeIngredients }
          : recipe
      );
      setRecipes(updatedRecipes);
      setRecipeName('');
      setRecipeIngredients('');
      setEditingRecipe(null);
    }
  };

  const handleDeleteRecipe = (id) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipes);
  };

  const handleEditRecipe = (recipe) => {
    setRecipeName(recipe.name);
    setRecipeIngredients(recipe.ingredients);
    setEditingRecipe(recipe);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Personal Favorite Recipes</h1>

      <div style={styles.formContainer}>
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          placeholder="Recipe Name"
          style={styles.input}
        />
        <textarea
          value={recipeIngredients}
          onChange={(e) => setRecipeIngredients(e.target.value)}
          placeholder="Ingredients"
          style={styles.textarea}
        />
        <button
          onClick={editingRecipe ? handleUpdateRecipe : handleAddRecipe}
          style={styles.button}
        >
          {editingRecipe ? 'Update Recipe' : 'Add Recipe'}
        </button>
      </div>

      <div>
        <h2>Your Recipes:</h2>
        <ul style={styles.recipeList}>
          {recipes.map((recipe) => (
            <li key={recipe.id} style={styles.recipeItem}>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients}</p>
              <button
                onClick={() => handleEditRecipe(recipe)}
                style={styles.editButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteRecipe(recipe.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'transparent',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    color: '#EFE3C2',  
    backgroundColor: '#123524',
    padding: '10px',
    borderRadius: '8px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: '#EFE3C2',  
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '100px',
    color: '#EFE3C2',  
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  recipeList: {
    listStyleType: 'none',
    padding: 0,
  },
  recipeItem: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px #123524',
  },
  editButton: {
    backgroundColor: '#FFA500',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  },
  deleteButton: {
    backgroundColor: '#DC3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};


export default RecipeApp;