import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";
import apiClient from "@/services/apiClient";

const Holiday = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await apiClient.get("/posts/category/Recipe");
        if (response.data && response.data.posts && response.data.posts.length > 0) {
          setRecipes(response.data.posts.slice(0, 2));  
        } else {
          setError("No Recipes found.");
        }
      } catch (error) {
        setError("No Recipes available.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  if (loading) {
    return <div className="text-center text-gray-700">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-center  text-black">{error}</div>;
  }

  return (
    <div className=" mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-purple-500 inline-block p-2">
          Featured Holiday Recipes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {recipes.length > 0 ? (
          recipes.map((recipe) => {
            const formattedDate = recipe.createdAt ? format(new Date(recipe.createdAt), 'MMMM dd, yyyy') : "No Date Available";

            return (
              <div
                key={recipe._id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => handleClick(recipe._id)}
              >
                <div className="border-b mb-4 pb-2">
                  <h3 className="text-white text-sm bg-purple-500 inline-block p-2">
                    {recipe.category.name}
                  </h3>
                </div>

                <h1 className="text-xl mb-4 text-start hover:text-purple-500">
                  {recipe.title}
                  <br />
                  <span className="text-sm text-gray-600">- {recipe.author || "Anonymous"} - {formattedDate}</span>
                </h1>

                <img
                  src={recipe.image || 'https://via.placeholder.com/600x400'}
                  alt={recipe.title}
                  className="mx-auto mb-4 h-48 object-cover rounded-md shadow-md"
                />

                <p className="text-gray-700 hover:text-purple-500 mb-6 line-clamp-3">
                  {recipe.content.length > 200 ? recipe.content.slice(0, 200) + '...' : recipe.content}
                </p>
              </div>
            );
          })
        ) : (
          <p>No recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default Holiday;
