import { Input } from "@/components/ui/input";
import apiClient from "@/services/apiClient";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import ContentEditor from "../Editor.jsx";
import { Button } from "../ui/button.jsx";
import { Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport } from "../ui/toast"; // Import Toast components

const AddPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    selectCategory: "",
  });

  const [categories, setCategories] = useState([]);
  const [toast, setToast] = useState({
    open: false,
    title: "",
    description: "",
    variant: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.id]: e.target.value });
  };

  const handleContentChange = (newContent) => {
    setPostData((prevState) => ({ ...prevState, content: newContent }));
  };

  const handleCategoryChange = (value) => {
    setPostData((prevState) => ({
      ...prevState,
      selectCategory: value,
    }));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await apiClient.get("/api/categories");
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const actualData = {
    title: postData.title,
    content: postData.content,
    category: postData.selectCategory,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postData.title || !postData.content || !postData.selectCategory) {
      alert("Please fill in all required fields.");
      return; 
    }

    try {
      const response = await apiClient.post("/api/posts", actualData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response) {
        setToast({
          open: true,
          title: "Success",
          description: "Post added successfully!",
          variant: "success",
        });
        setPostData({
          title: "",
          content: "",
          selectCategory: "",
        });
      }
    } catch (error) {
      setToast({
        open: true,
        title: "Error",
        description: "Failed to add the post.",
        variant: "error",
      });
      console.error("Failed to add post:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-2xl font-bold">Add Post</h1>

      {/* Render the Toast component */}
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
      <ToastViewport />

      <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
        <div className=" mt-2">
          <label htmlFor="title " className="font-bold">Title</label>
          <Input
            value={postData.title}
            onChange={handleChange}
            type="text"
            id="title"
            placeholder="Title"
            required
          />
        </div>

        <div className="font-bold mt-4">
          <label htmlFor="content">Content</label>
          <ContentEditor
            content={postData.content}
            handleContentChange={handleContentChange}
          />
        </div>

        <div className="mt-2 w-[300px]">
          <Select onValueChange={handleCategoryChange} value={postData.selectCategory}>
            <SelectTrigger className="w-[300px] bg-white border rounded">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent className="bg-white border p-3 w-[300px]">
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category._id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button className={"w-[100px] mt-4"} type="submit">
          Add Post
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
