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

  const fetchCategories = async () => {
    try {
      const result = await apiClient.get("/api/categories");
      setCategories(result.data || []); 
    } catch (error) {
      alert("Failed to load categories:");
    }
  };

  const fetchPost = async () => {
    if (!postId) {
      console.error("Post ID is undefined.");
      return;
    }

    try {
      const response = await apiClient.get(`/api/posts/${postId}`);
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
      await apiClient.put(`/api/posts/${postId}`, postData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Post updated successfully! Redirecting...");
      setTimeout(() => {
        navigate("/dashboard/AllPosts");
      }, 1000);
    } catch (error) {
      alert("Error while updating the post:");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Post</h1>
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
