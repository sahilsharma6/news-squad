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
import { useParams, useNavigate } from "react-router-dom";
import ContentEditor from "../Editor.jsx";
import { Button } from "../ui/button.jsx";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  console.log();

  const [postData, setPostData] = useState({
    title: "",
    selectCategory: "",
    content: "",
  });
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCategories = async () => {
    try {
      const result = await apiClient.get("/api/categories");
      //   setCategories(result.data.categories || []);
    } catch (error) {
      console.error("Failed to load categories:", error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await apiClient.get(`/api/posts/${postId}`);
        const post = response.data.post;
        console.log(response);
        // Set postData including title and category/subcategory
        setPostData({
          title: post.title,
          content: post.content,
          selectCategory: post.category.name || "",
        });
      } catch (error) {
        console.error("Failed to load post data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
    fetchPost();
  }, [postId]);

  const handleCategoryChange = async (value) => {
    setPostData((prevState) => ({
      ...prevState,
      selectCategory: value,
      selectSubCategory: "",
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
      await apiClient.put(`api/posts/${postId}`, postData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTimeout(() => {
        navigate("/dashboard/AllPosts");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <ToastContainer /> */}
      <h1>Edit Post</h1>
      <div className="mt-4">
        {/* <BreadcrumbWithOneSeparator currentPage="Edit Post" /> */}
      </div>

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
                {categories.map((category) => (
                  <SelectItem key={category._id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button className={"w-[100px] mt-4"} onClick={handleSubmit}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditPost;