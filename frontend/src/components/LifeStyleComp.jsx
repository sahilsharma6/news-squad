import React, { useState, useEffect } from "react";

const NewsLayout2 = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Travel", "Recipes", "Health & Fitness", "Music"];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        const data = await response.json();
        setPosts(data.posts);
        setFilteredPosts(data.posts); // Initially set filteredPosts to all posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredPosts(posts); // Show all posts
    } else {
      setFilteredPosts(posts.filter(post => post.category?.name === category)); // Filter by selected category
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b pb-3 mb-6">
        <h1 className="text-sm text-white bg-green-800 p-2">LIFESTYLE NEWS</h1>
        <nav className="flex items-center space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-gray-600 hover:text-green-600 ${
                activeCategory === category ? "font-bold text-green-600" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.slice(0, 4).map((post, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              <img
                src={post.image || "https://placehold.co/600x400"}
                alt={post.title || "Post Image"}
                className="w-full h-48 object-cover"
              />
              <span className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 mb-2 hover:bg-green-600">
                {post.category?.name || "Uncategorized"}
              </span>
            </div>
            <div className="mt-4">
              <h2 className="mt-2 text-xl font-semibold hover:text-green-600">
                {post.title || "Untitled"}
              </h2>
              <p className="text-sm text-gray-600">
                {post.author || "Anonymous"} - {new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {filteredPosts.slice(4, 8).map((post, index) => (
          <div key={index} className="flex items-center">
            <img
              src="https://via.placeholder.com/100"
              alt={post.title || "Post Image"}
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h3 className="text-sm hover:text-green-600">{post.title || "Untitled"}</h3>
              <p className="text-xs text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLayout2;
