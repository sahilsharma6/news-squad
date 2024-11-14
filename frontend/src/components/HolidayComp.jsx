import React, { useEffect, useState } from "react";
import axios from "axios"; // Importing axios for API calls
import { format } from 'date-fns';
const Holiday = () => {
  const [recipe, setRecipe] = useState(null);  // State to hold a single recipe

  useEffect(() => {
    // Using async function inside useEffect to fetch one recipe
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/category/Recipe");
        setRecipe(response.data.posts[0]);  // Assuming you want the first recipe from the list
      } catch (error) {
        console.log("Error fetching recipe:", error);  // Log any error during fetch
      }
    };

    fetchRecipe();  // Calling fetchRecipe once on mount
  }, []);  // Empty dependency array to run once on mount

  // If the recipe hasn't been fetched yet, show loading message
  if (!recipe) {
    return <div className="text-center text-gray-700">Loading recipe...</div>;
  }
  const formattedDate = recipe.createdAt ? format(new Date(recipe.createdAt), 'MMMM dd, yyyy') : "No Date Available";
  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Section Title */}
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-purple-500 inline-block p-2">
          Holiday Recipe
        </h2>
      </div>

      {/* Main Title */}
      <h1 className="text-xl mb-4 text-start hover:text-purple-500">
        {recipe.title}
        <br />
        <span className="text-sm">- {recipe.author} - {formattedDate}</span>
      </h1>

      {/* Recipe Image */}
      <img
        src={recipe.image || 'https://via.placeholder.com/600x400'}
        alt={recipe.title}
        className="mx-auto mb-4 h-48 object-cover"
      />

      {/* Recipe Description */}
      <p className="text-gray-700 hover:text-purple-500 mb-6">
        {recipe.content}
      </p>

      {/* Recipe Instructions or Ingredients */}
    </div>
  );
};

export default Holiday;
