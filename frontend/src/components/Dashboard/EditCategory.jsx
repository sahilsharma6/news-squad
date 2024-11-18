import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import apiClient from "@/services/apiClient";
import { Button } from "../ui/button.jsx";

const EditCategory = () => {
  const { id } = useParams();
  const categoryId = id;
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchCategory = async () => {
    if (!categoryId) {
      console.error("Category ID is undefined.");
      return;
    }

    try {
      const response = await apiClient.get(`/api/categories/${categoryId}`);
      const category = response.data;
      setCategoryData({
        name: category.name,
      });
    } catch (error) {
      console.error("Failed to load category data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when this component is mounted
    window.scrollTo(0, 0);
    fetchCategory();
  }, [categoryId]);

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  // Reset error message
    setSuccess(""); // Reset success message

    if (!categoryData.name.trim()) {
      setError("Category name is required.");
      return;
    }

    try {
      const response = await apiClient.put(`/api/categories/${categoryId}`, categoryData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSuccess("Category updated successfully!");
      setTimeout(() => {
        navigate("/dashboard/AllCategories");
      }, 1000);
    } catch (error) {
      setError("Error while updating the category.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Category</h2>

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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <Input
            id="name"
            type="text"
            value={categoryData.name}
            onChange={handleChange}
            placeholder="Enter category name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
