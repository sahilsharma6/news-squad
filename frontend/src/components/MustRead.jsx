import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';  // Optional: for formatting the date
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const Mustread = () => {
  const [articles, setArticles] = useState([]); // State to store the fetched articles
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [postsPerPage] = useState(2);             // Number of posts per page

  const navigate = useNavigate(); // Hook for navigation

  // Fetching data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts'); // Adjust URL based on your API
        console.log(response.data);  // Log the response to inspect its structure

        // Assuming the API returns an array of posts directly
        if (response.data && Array.isArray(response.data.posts)) {
          setArticles(response.data.posts); // Update the articles state with the fetched data
        } else {
          setError("Unexpected data format"); // Error if data is not in the expected format
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to load data."); // Handle error if API request fails
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  if (loading) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>{error}</p>; // Show error message if there's an error during data fetching
  }

  // Sorting posts by views in descending order
  const sortedArticles = Array.isArray(articles)
    ? [...articles].sort((a, b) => b.views - a.views)
    : [];

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedArticles.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // OnClick handler to navigate to article details
  const handleArticleClick = (articleId) => {
    navigate(`/post/${articleId}`);  // Navigate to the detailed view of the article
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4">
        <span className="text-white text-sm p-2 bg-black">
          MUST READ
        </span>
        <br />
        <div className="pt-1">
          <hr className="border-black pt-2 border-double" />
        </div>
      </h2>

      {/* Display posts */}
      <div className="space-y-6">
        {currentPosts.map((article, index) => {
          // Format the createdAt date if it's available
          const formattedDate = article.createdAt ? format(new Date(article.createdAt), 'MMMM dd, yyyy') : "No Date Available";

          return (
            <div
              key={index}
              className="items-start bg-white hover:text-blue-500 cursor-pointer"  // Added cursor-pointer for clickable effect
              onClick={() => handleArticleClick(article._id)} // OnClick to navigate
            >
              <img
                src={article.imgSrc || 'default-image.jpg'} // Fallback if imgSrc is not available
                alt={article.title}
                className="w-80 h-40 object-cover"
              />
              <div className="text-left">
                <h2 className="text-xl md:text-xl font-semibold mb-2 hover:text-blue-500 pt-4">
                  {article.title}
                </h2>
                <span className="text-xs mb-2 text-black">
                  By {article.author} - {formattedDate}
                </span>
                {/* Optionally display description or other fields */}
                {/* <p className="text-gray-700 hidden md:block">{article.description}</p> */}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {/* <div className="flex justify-center mt-6">
        
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-l-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>


        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-r-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(sortedArticles.length / postsPerPage)}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Mustread;
