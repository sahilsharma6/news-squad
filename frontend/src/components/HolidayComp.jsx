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
    <div className="mx-auto p-6">
      <div className="border-b mb-6 pb-4">
        <h2 className="text-lg text-white bg-purple-500 inline-block p-2">
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
                className="cursor-pointer hover:shadow-xl transition-all duration-300 rounded-lg border border-gray-200 bg-white"
                onClick={() => handleClick(recipe.param)}
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h3 className="text-sm text-white bg-purple-500 inline-block py-1 px-3 rounded-md">
                    {recipe.category.name}
                  </h3>
                </div>

                <div className="p-4">
                  <h1 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-500 transition-all duration-300">
                    {recipe.title}
                  </h1>

                  <p className="text-sm text-gray-600">
                    <span> {recipe.author || "Admin"} - </span>
                 
                    <span>{formattedDate}</span>
                  </p>

                  <img
                    src={import.meta.env.VITE_BACKEND_URL + recipe.image || 'https://via.placeholder.com/600x400'}
                    alt={recipe.title}
                    className="mt-4 rounded-md shadow-md w-full h-48 object-cover"
                  />
                </div>
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
