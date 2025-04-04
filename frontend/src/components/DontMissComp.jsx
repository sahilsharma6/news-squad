import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import img1 from '../assets/article1.jpg';
import apiClient from "@/services/apiClient";

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
      setLoading(true);
      try {
        const response = await apiClient.get("/posts");
        if (response.data && response.data.posts) {
          setNewsData(response.data.posts);
        } else {
          setError("No posts available");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        if (error.response) {
          setError(`Error: ${error.response.status} - ${error.response.data.message || "Failed to fetch posts"}`);
        } else if (error.request) {
          setError("Network error: No response from the server");
        } else {
          setError(`Error: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNewsData = selectedCategory === "All"
    ? newsData
    : newsData.filter(newsItem => newsItem.category?.name === selectedCategory);

  const displayedArticles = filteredNewsData?.slice(0, 5);

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <div className="spinner"></div> {/* Custom Spinner */}
      </div>
    );
  }

  if (error) {
    return <p className="text-black">{error}</p>;
  }

  // Get the main article (first article)
  const mainArticle = displayedArticles && displayedArticles[0];

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
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:flex-wrap md:gap-4">
            {displayedArticles && displayedArticles.length > 0 ? (
              displayedArticles.slice(1).map((article, index) => {
                const formattedDate = article.createdAt
                  ? format(new Date(article.createdAt), "MMMM dd, yyyy")
                  : "No Date Available";

                return (
                  <Link key={index} to={`/post/${article._id}`} className="flex items-center h-fit transition-all duration-200">
                    <img
                      src={import.meta.env.VITE_BACKEND_URL + article.image || "default-image.jpg"}
                      alt={article.title}
                      className="w-16 h-16 object-cover rounded-md mr-2"
                    />
                    <div>
                      <h3 className="text-md hover:text-yellow-500">{article.title}</h3>
                      <p className="text-gray-500">{formattedDate}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>No articles available in this category</p>
            )}
          </div>

          {/* Main article on the right */}
          {mainArticle && (
            <div className="md:col-span-1">
              <Link to={`/post/${mainArticle._id}`}>
                <img
                  src={import.meta.env.VITE_BACKEND_URL + mainArticle.image || img1}
                  alt="Main article"
                  className="w-full h-auto rounded-md mb-4"
                />
                <h2 className="text-lg font-bold hover:text-yellow-400">{mainArticle.title}</h2>
                <p className="text-gray-500 mb-1">{format(new Date(mainArticle.createdAt), "MMMM dd, yyyy")}</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
