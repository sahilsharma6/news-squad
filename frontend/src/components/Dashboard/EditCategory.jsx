import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import apiClient from "@/services/apiClient";
import { Button } from "../ui/button.jsx";
import { Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport } from "@/components/ui/toast"; 

const EditCategory = () => {
  const { id } = useParams();
  const categoryId = id;
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState({
    name: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState({
    open: false,
    variant: "",
    title: "",
    description: "",
  });

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
    setToast({ open: false, variant: "", title: "", description: "" }); // Reset toast state

    if (!categoryData.name.trim()) {
      setToast({
        open: true,
        variant: "error",
        title: "Error",
        description: "Category name is required.",
      });
      return;
    }

    try {
      const response = await apiClient.put(`/api/categories/${categoryId}`, categoryData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setToast({
        open: true,
        variant: "success",
        title: "Success",
        description: "Category updated successfully!",
      });

      setTimeout(() => {
        navigate("/dashboard/AllCategories");
      }, 1000);
    } catch (error) {
      setToast({
        open: true,
        variant: "error",
        title: "Error",
        description: "Error while updating the category.",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Category</h2>

      {/* Toast component to show success/error messages */}
      {toast.open && (
        <Toast
          variant={toast.variant}
          open={toast.open}
          onOpenChange={() => setToast({ ...toast, open: false })}
          className={`text-4xl ${
            toast.variant === "success" ? "text-green-500" : "text-red-500"
          }  bottom-96`}
        >
          <ToastTitle>{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
          <ToastClose />
        </Toast>
      )}

      {/* Toast viewport */}
      <ToastViewport />

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
