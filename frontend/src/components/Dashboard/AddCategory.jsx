import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport } from "@/components/ui/toast"; // Import Toast component

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [toast, setToast] = useState({ open: false, variant: "", title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryName.trim()) {
      setToast({
        open: true,
        variant: "error",
        title: "Error",
        description: "Category name is required",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/categories", {
        name: categoryName,
      });

      setToast({
        open: true,
        variant: "success",
        title: "Success",
        description: `Category "${response.data.category.name}" created successfully! Redirecting...`,
      });
      setCategoryName("");

      setTimeout(() => {
        navigate("/dashboard/AllCategories");
      }, 2000);
    } catch (error) {
      if (error.response) {
        setToast({
          open: true,
          variant: "error",
          title: "Error",
          description: error.response.data.message || "Something went wrong",
        });
      } else {
        setToast({
          open: true,
          variant: "error",
          title: "Server Error",
          description: "Please try again.",
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Category</h2>

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
    </div>
  );
};

export default AddCategory;
