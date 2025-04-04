import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import apiClient from "@/services/apiClient";
import { Link } from "react-router-dom";


const categories = [
  "All",
  "New Look",
  "Street Fashion",
  "Style Hunter",
  "Vogue",
];

export default function FilterableBlog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");

      

        const response = await apiClient.get("/posts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && Array.isArray(response.data.posts)) {
          setBlogPosts(response.data.posts);
        } else {
          setError("No posts available.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category && post.category.name === activeCategory
        );

  const postsToDisplay = filteredPosts.slice(0, 4);

  return (
    <div className="w-full max-h-[55vh] bg-white z-[999999]">
      <div className="flex">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <main className="flex-1 px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : filteredPosts.length === 0 ? (
              <p className="text-lg text-gray-600">No posts in this category.</p>
            ) : (
              postsToDisplay.map((post) => (
                <HorizontalBlogPosts key={post._id} post={post} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar({ categories, activeCategory, setActiveCategory }) {
  return (
    <aside className="w-64 bg-white p-4 border-r border-gray-200">
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onMouseEnter={() => setActiveCategory(category)}
              className={`text-left w-full py-2 px-4 rounded ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

const HorizontalBlogPosts = ({ post }) => {

  const categoryName = post.category && post.category.name ? post.category.name : "No Category";
  const authorName = post.author || "Admin"; 

  return (
    <Link
     to={`/post/${post._id}`} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img
        src={import.meta.env.VITE_BACKEND_URL + post.image}
        alt={post.title}
        className="w-32 rounded-md object-cover mb-4"
      />
      <div className="flex justify-between items-center mb-2">
        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
          {categoryName}
        </span>
       
      </div>
      <h4 className="text-sm font-bold text-gray-800 mb-2">{post.title}</h4>
     
    </Link>
  );
};

HorizontalBlogPosts.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
    image: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
