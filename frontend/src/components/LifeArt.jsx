import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';  // Import date-fns to format dates

const ArticleList = () => {
  const [newsData, setNewsData] = useState([]); // Stores all articles
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [postsPerPage] = useState(5); // Number of posts per page

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesResponse = await axios.get("http://localhost:5000/api/posts");
        setNewsData(articlesResponse.data); // Set fetched data
        setLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        setError("Failed to load news");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle errors
  if (error) {
    return <p>{error}</p>;
  }

  // Filter articles by category (Style in this case)
  const filteredNewsData = newsData.filter(newsItem => newsItem.category?.name === 'Style');

  // Get the posts to display based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredNewsData.slice(indexOfFirstPost, indexOfLastPost);

  // Change the page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(filteredNewsData.length / postsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
        {currentPosts.map((article, index) => {
          // Format the createdAt date field
          const formattedDate = article.createdAt
            ? format(new Date(article.createdAt), 'MMMM dd, yyyy')  // Format as Month day, year
            : 'No Date Available';

          return (
            <div key={index} className="flex items-start bg-white p-4 border rounded-md shadow-md">
              <img
                src={article.image || 'https://via.placeholder.com/150'}
                alt={article.title}
                className="w-1/3 h-auto object-cover"
              />
              <div className="pl-4 w-2/3">
                <span className="text-xs font-semibold uppercase text-white bg-black px-2 py-1 mb-2 inline-block hover:bg-blue-400">
                  {article.category?.name || 'Uncategorized'}
                </span>
                <h2 className="text-sm md:text-xl font-semibold mb-2 hover:text-blue-500">{article.title}</h2>
                <span className="text-xs text-black mb-2 font-bold">By {article.author || 'Unknown Author'}</span>
                <span className="text-xs"> - {formattedDate}</span>  {/* Display formatted date */}
                <p className="text-gray-700 hidden md:block">
                  {article.content || 'No description available.'}
                </p>
              </div>
              <div className="flex justify-end">
                <span className="text-xs bg-gray-800 text-white rounded-full px-2 py-1 items-center hidden md:flex">
                  {article.views || 0}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between">
        {/* Previous Page Button */}
        <button
          className="bg-blue-500 text-white p-2 rounded"
          disabled={currentPage === 1} // Disable "Previous" if we're on the first page
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </button>

        {/* Page Info */}
        <div className="flex items-center">
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {/* Next Page Button */}
        <button
          className="bg-blue-500 text-white p-2 rounded"
          disabled={currentPage === totalPages} // Disable "Next" if we're on the last page
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
