import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import ContentEditor from "../Editor.jsx";
import { Button } from "../ui/button.jsx";
import { Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport } from "../ui/toast.jsx"; 

const EditPost = () => {
  const { id } = useParams();
  const postId = id;
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: "",
    selectCategory: "",
    content: "",
  });
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(true);

  const [toast, setToast] = useState({
    open: false,
    variant: "success", // 'success' or 'error'
    title: "",
    description: "",
  });

  const fetchCategories = async () => {
    try {
      const result = await apiClient.get("/categories");
      setCategories(result.data || []);
    } catch (error) {
      alert("Failed to load categories.");
    }
  };

  const fetchPost = async () => {
    if (!postId) {
      console.error("Post ID is undefined.");
      return;
    }

    try {
      const response = await apiClient.get(`/posts/${postId}`);
      const post = response.data;
      setPostData({
        title: post.title,
        content: post.content,
        selectCategory: post.category ? post.category.name : "",
      });
    } catch (error) {
      console.error("Failed to load post data:", error);
    } finally {
      setPostLoading(false);
    }
  };

  useEffect(() => {
    if (!postId) {
      console.error("Post ID is undefined, cannot fetch post data.");
      return;
    }

    fetchCategories();
    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (categories.length > 0 && postData.title) {
      setIsLoading(false);
    }
  }, [categories, postData.title]);

  const handleCategoryChange = (value) => {
    setPostData((prevState) => ({
      ...prevState,
      selectCategory: value,
    }));
  };

  const handleContentChange = (newContent) => {
    setPostData((prevState) => ({ ...prevState, content: newContent }));
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiClient.put(`/posts/${postId}`, postData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setToast({
        open: true,
        variant: "success",
        title: "Success!",
        description: "Post updated successfully.",
      });

      setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, open: false }));
        navigate("/dashboard/AllPosts");
      }, 2000);
    } catch (error) {
      setToast({
        open: true,
        variant: "error",
        title: "Error!",
        description: "Error while updating the post.",
      });

      setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, open: false }));
      }, 1000);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Post</h1>

      {/* Render the Toast component */}
      {toast.open && (
        <Toast
          variant={toast.variant}
          open={toast.open}
          onOpenChange={() => setToast({ ...toast, open: false })}
          className={` ${toast.variant === "success" ? "text-green-500" : "text-red-500"} bottom-96 text-xs`}
        >
          <ToastTitle>{toast.title}</ToastTitle>
          <ToastDescription>{toast.description}</ToastDescription>
          <ToastClose />
        </Toast>
      )}

      <ToastViewport />

      <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
        <div className="w-1/4 md:w-96 mt-2">
          <label htmlFor="title">Title</label>
          <Input
            value={postData.title}
            onChange={handleChange}
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>

        <div className="mt-2">
          <label htmlFor="content">Content</label>
          <ContentEditor
            content={postData.content}
            handleContentChange={handleContentChange}
          />
        </div>

        <div className="mt-2 w-[300px]">
          <Select
            onValueChange={handleCategoryChange}
            value={postData.selectCategory}
          >
            <SelectTrigger className="w-[300px] bg-white border rounded">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent className="bg-white border p-3 w-[300px]">
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <SelectItem key={category._id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="">No categories available</SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button className={"w-[100px] mt-4"} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditPost;
