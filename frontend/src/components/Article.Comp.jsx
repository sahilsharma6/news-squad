import React, { useEffect, useState } from "react";
import axios from "axios";  
import { Link } from "react-router-dom";  
import { format } from "date-fns";  

const api = axios.create({
  baseURL: "http://localhost:5000/api",  
  timeout: 10000, 
});

const ArticleItem = ({ article }) => {
  if (!article) {
    return <div>No article data available</div>;
  }

  // Format the createdAt date using date-fns
  const formattedDate = article.createdAt
    ? format(new Date(article.createdAt), "MMMM dd, yyyy") // Format as Month day, year
    : "No Date Available"; // Fallback if no date available

  return (
    <Link to={`/post/${article._id}`} key={article._id}>
      <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="relative">
          <img
            src={article.image || "default-image.jpg"}  // Fallback if no image is found
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 uppercase">
            {article.category?.name || "Uncategorized"}  {/* Display category name */}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold hover:text-blue-500">{article.title}</h3>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>{article.author || "Unknown Author"}</span> - <span>{formattedDate}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-700">
            <span>Views: {article.views || 0}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Latest = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const [postsPerPage] = useState(5);  // Number of posts per page (adjustable)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await api.get("/posts");  // Fetching posts from the API
        setNewsData(response.data.posts);  // Assuming your API returns an array of articles
      } catch (err) {
        console.error("Error fetching data:", err);  // Logs error to console
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);  // Runs once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Pagination Logic: Calculate the current posts to display
  console.log('nData',newsData);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination handler to go to the next/previous page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">
          LATEST ARTICLE
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {currentPosts.map((article) => (
          <ArticleItem key={article._id} article={article} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {/* Previous Button */}
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-l-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}  // Disable if on the first page
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(Math.ceil(newsData.length / postsPerPage))].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} border`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-r-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(newsData.length / postsPerPage)}  // Disable if on the last page
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Latest;
