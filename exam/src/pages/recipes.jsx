import React, { useState } from 'react';

import spaghettiCarbonaraImage from '../assets/spaghetti-carbonara.jpeg';
import chickenCurryImage from '../assets/chicken-curry.jpg';
import sushiImage from '../assets/sushi.jpeg';
import tacosImage from '../assets/tacos.jpg';
import vegetableStirFryImage from '../assets/vegetable-stir-fry.jpg';
import beefStroganoffImage from '../assets/beef-stroganoff.jpg';  // Add the image path
import caesarSaladImage from '../assets/caesar-salad.jpg';        // Add the image path

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const recipesList = [
    { 
      id: 1, 
      name: 'Spaghetti Carbonara', 
      category: 'Italian', 
      description: 'A classic Roman pasta dish with eggs, cheese, pancetta, and pepper.',
      image: spaghettiCarbonaraImage,
      recipeInstructions: [
        'Boil pasta according to package instructions.',
        'In a separate pan, cook pancetta until crispy.',
        'Whisk eggs and Parmesan cheese together.',
        'Drain pasta, then toss with pancetta and egg mixture.',
        'Season with salt and pepper, and serve immediately.'
      ]
    },
    { 
      id: 2, 
      name: 'Chicken Curry', 
      category: 'Indian', 
      description: 'A spicy and flavorful dish made with chicken and curry spices.',
      image: chickenCurryImage,
      recipeInstructions: [
        'Sauté onions, garlic, and ginger in oil until softened.',
        'Add chicken and cook until browned.',
        'Add curry powder, turmeric, and cumin, cook for another minute.',
        'Pour in coconut milk and simmer for 15 minutes.',
        'Season with salt, serve with rice.'
      ]
    },
    { 
      id: 3, 
      name: 'Sushi', 
      category: 'Japanese', 
      description: 'A Japanese dish consisting of vinegared rice, seafood, and vegetables.',
      image: sushiImage,
      recipeInstructions: [
        'Cook sushi rice and let it cool to room temperature.',
        'Slice fish and vegetables into thin strips.',
        'Lay a seaweed sheet on a bamboo mat, spread rice evenly on top.',
        'Add fish or vegetables, roll tightly using the mat.',
        'Slice into pieces and serve with soy sauce and wasabi.'
      ]
    },
    { 
      id: 4, 
      name: 'Tacos', 
      category: 'Mexican', 
      description: 'A traditional Mexican dish with seasoned meat, salsa, and toppings wrapped in a tortilla.',
      image: tacosImage,
      recipeInstructions: [
        'Cook seasoned ground beef or chicken.',
        'Warm tortillas in a skillet.',
        'Fill tortillas with cooked meat, lettuce, cheese, and salsa.',
        'Garnish with cilantro, avocado, or sour cream, and serve.'
      ]
    },
    { 
      id: 5, 
      name: 'Vegetable Stir-fry', 
      category: 'Chinese', 
      description: 'A quick and healthy dish made with stir-fried vegetables in soy sauce.',
      image: vegetableStirFryImage,
      recipeInstructions: [
        'Chop vegetables into bite-sized pieces.',
        'Heat oil in a pan and stir-fry vegetables.',
        'Add soy sauce and a pinch of sugar.',
        'Serve with rice or noodles.'
      ]
    },
    { 
      id: 6,
      name: 'Beef Stroganoff',
      category: 'Russian',
      description: 'A creamy and rich dish made with tender beef, mushrooms, and sour cream.',
      image: beefStroganoffImage,
      recipeInstructions: [
        'Brown beef in a skillet and remove.',
        'Sauté onions and garlic in the same skillet.',
        'Add sliced mushrooms and cook until softened.',
        'Stir in sour cream, beef broth, and Dijon mustard.',
        'Add the beef back in and simmer until the sauce thickens.',
        'Serve with rice or noodles.'
      ]
    },
    { 
      id: 7,
      name: 'Caesar Salad',
      category: 'American',
      description: 'A refreshing salad made with romaine lettuce, croutons, and Caesar dressing.',
      image: caesarSaladImage,
      recipeInstructions: [
        'Chop lettuce into bite-sized pieces.',
        'Toss lettuce with Caesar dressing and croutons.',
        'Sprinkle with grated Parmesan cheese.',
        'Serve chilled.'
      ]
    }
  ];

  const filteredRecipes = recipesList.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRecipeClick = (id) => {
    setSelectedRecipeId(id === selectedRecipeId ? null : id);
  };

  return (
    <div>
      <h1>DishDelights Recipes</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id} className={`recipe-item ${selectedRecipeId === recipe.id ? 'active' : ''}`}>
            <div onClick={() => handleRecipeClick(recipe.id)} className="recipe-item-header">
              <img src={recipe.image} alt={recipe.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <span>{recipe.name} - {recipe.category}</span>
            </div>

            {selectedRecipeId === recipe.id && (
              <div className="recipe-details">
                <p><strong>Description:</strong> {recipe.description}</p>
                <h3>How to Make It:</h3>
                <ol>
                  {recipe.recipeInstructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
