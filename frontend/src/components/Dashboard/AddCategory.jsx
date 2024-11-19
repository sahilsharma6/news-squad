import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      setError("Category name is required");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/categories", {
        name: categoryName,
      });

      setSuccess(`Category "${response.data.category.name}" created successfully! Redirecting...`);
      setCategoryName("");

      setTimeout(() => {
        navigate("/dashboard/AllCategories");
      }, 2000);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Something went wrong");
      } else {
        setError("Server Error. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Category</h2>

      {success && (
        <div className="bg-green-200 text-green-800 p-2 rounded mb-4">
          {success}
        </div>
      )}

      {error && (
        <div className="bg-red-200 text-red-800 p-2 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter category name"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
