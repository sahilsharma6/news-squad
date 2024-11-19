import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const Holiday = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/category/Recipe");
        if (response.data && response.data.posts && response.data.posts.length > 0) {
          setRecipe(response.data.posts[0]);
        } else {
          setError("No recipe found.");
        }
      } catch (error) {
        setError("Failed to load recipe. Please try again later.");
      }
    };

    fetchRecipe();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!recipe) {
    return <div className="text-center text-gray-700">Loading recipe...</div>;
  }

  const formattedDate = recipe.createdAt ? format(new Date(recipe.createdAt), 'MMMM dd, yyyy') : "No Date Available";

  const handleClick = () => {
    navigate(`/post/${recipe._id}`);
  };

  return (
    <div className="max-w-xl mx-auto p-4" onClick={handleClick}>
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-purple-500 inline-block p-2">
          Holiday Recipe
        </h2>
      </div>

      <h1 className="text-xl mb-4 text-start hover:text-purple-500">
        {recipe.title}
        <br />
        <span className="text-sm">- {recipe.author} - {formattedDate}</span>
      </h1>

      <img
        src={recipe.image || 'https://via.placeholder.com/600x400'}
        alt={recipe.title}
        className="mx-auto mb-4 h-48 object-cover"
      />

      <p className="text-gray-700 hover:text-purple-500 mb-6">
        {recipe.content}
      </p>
    </div>
  );
};

export default Holiday;
