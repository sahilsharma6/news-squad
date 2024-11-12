import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";  // Import date-fns for date formatting

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);  // Store all news articles
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState("");  // Error state
  const [currentPage, setCurrentPage] = useState(1);  // Current page for pagination
  const [postsPerPage] = useState(5);  // Number of posts per page (adjustable)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");  // Adjust this to your API endpoint
        setNewsData(response.data);  // Assuming your API returns an array of news articles
        setLoading(false);
      } catch (error) {
        setError("Failed to load news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);  // Empty dependency array to run once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Filter news data to only include posts with category 'Fashion'
  const filteredNewsData = newsData.filter(newsItem => newsItem.category?.name === 'Fashion');

  // Pagination logic: Calculate the index for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredNewsData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="mx-[10%] my-8">
      <div className="border-b-2 border-purple-700 mb-4">
        <h2 className="text-lg bg-black text-white w-fit p-1 font-bold">
          LATEST NEWS
        </h2>
      </div>

      {filteredNewsData.length === 0 ? (
        <p>No posts available in the Fashion category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {currentPosts.map((newsItem) => {
            // Format the createdAt date field using date-fns
            const formattedDate = newsItem.createdAt
              ? format(new Date(newsItem.createdAt), "MMMM dd, yyyy")  // Format as Month day, year
              : "No Date Available"; // Fallback if no date available

            return (
              <Link key={newsItem._id} to={`/post/${newsItem._id}`}>
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={newsItem.image || "default-image.jpg"}  // Adjust image property if needed
                      alt={newsItem.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute bottom-0 left-0 bg-black text-white text-xs px-2 py-1 uppercase">
                      {newsItem.category?.name || "No Category"}
                    </span>
                  </div>

                  <div className="mt-2">
                    <h3 className="text-lg font-bold">{newsItem.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      {newsItem.author || "Unknown Author"} - {formattedDate}
                      <div className="flex bg-black justify-between text-sm text-white px-1">
                        <span>{newsItem.views || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {/* Previous Button */}
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-l-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}  // Disable if on first page
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(Math.ceil(filteredNewsData.length / postsPerPage))].map((_, index) => (
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
          disabled={currentPage === Math.ceil(filteredNewsData.length / postsPerPage)}  // Disable if on last page
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default LatestNews;
