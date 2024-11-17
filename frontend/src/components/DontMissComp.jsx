import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import img1 from '../assets/article1.jpg';

const NewsLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newsData, setNewsData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("All"); 

  const categories = ["All", "Style Hunter", "Vogue", "Health & Fitness", "Travel", "Gadgets"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setNewsData(response.data.posts);
        setLoading(false);
      } catch (error) {
        setError("Failed to load news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  
  const filteredNewsData = selectedCategory === "All"
    ? newsData
    : newsData.filter(newsItem => newsItem.category?.name === selectedCategory);

 
  const displayedArticles = filteredNewsData?.slice(0, 4);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 flex-1">
        {/* Navbar */}
        <div className="flex items-center justify-between border-b pb-1 mb-2 w-full">
          <h1 className="text-black bg-yellow-500 text-sm p-2">DON'T MISS</h1>

          <nav className="relative">
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDropdown}
                className="text-gray-500 hover:text-yellow-500 md:hidden"
              >
                {selectedCategory}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <div className="flex flex-col p-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block px-4 py-2 text-gray-500 hover:text-yellow-500"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main article */}
          <Link to={`/post/1`} className="md:col-span-1">
            <img
              src={img1}
              alt="Main article"
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-bold mt-2 hover:text-yellow-400">
              Interior Designer and Maude Interiors by Yvonne Designs
            </h2>
            <p className="text-gray-500 mb-1">Armin Vans - August 7, 2019</p>
            <p className="text-gray-700">
              We woke reasonably late following the feast and free-flowing wine the night before...
            </p>
          </Link>

          {/* Side articles */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:flex-wrap md:gap-4">
            {displayedArticles.map((article, index) => {
              const formattedDate = article.createdAt
                ? format(new Date(article.createdAt), "MMMM dd, yyyy")
                : "No Date Available";

              return (
                <Link key={index} to={`/post/${article._id}`} className="flex">
                  <img
                    src={article.image || "default-image.jpg"}
                    alt={article.title}
                    className="w-16 h-16 object-cover rounded-md mr-2"
                  />
                  <div>
                    <h3 className="text-md hover:text-yellow-500">{article.title}</h3>
                    <p className="text-gray-500">{formattedDate}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
