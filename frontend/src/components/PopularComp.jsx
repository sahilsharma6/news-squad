import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Performan = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
       
        
        if (response.data && Array.isArray(response.data.posts)) {
          setData(response.data.posts); 
        } else {
          setError("Data is not in expected format.");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

 
  const sortedData = Array.isArray(data) ? [...data].sort((a, b) => b.views - a.views) : [];
  const mostViewedPosts = sortedData.slice(0, 4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mostViewedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm md:text-base p-2 inline-block bg-black text-center">Most Popular</h2>
      </div>

      {/* Display posts */}
      <div className="space-y-4">
        {currentPosts.map((article, index) => {
      
          const formattedDate = article.createdAt ? format(new Date(article.createdAt), 'MMMM dd, yyyy') : "No Date Available";
          
          return (
            <div
              key={article._id}
              className="flex items-start bg-white p-2"
              onClick={() => navigate(`/post/${article._id}`)} 
              style={{ cursor: 'pointer' }}
            >
              <img
                src={article.imgSrc || 'default-image.jpg'}
                alt={article.title}
                className="w-1/4 h-16 object-cover mr-4"
              />
              <div className="w-3/4">
                <h2 className="text-xs md:text-sm mb-1 text-gray-800 font-semibold">{article.title}</h2>
                <p className="text-xs text-gray-500 mb-1">By {article.author} - {formattedDate}</p>
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
          aria-label="Previous page"
        >
          Previous
        </button>

        Page Numbers
        {[...Array(Math.ceil(mostViewedPosts.length / postsPerPage))].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} border`}
            onClick={() => paginate(index + 1)}
            aria-label={`Go to page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-r-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(mostViewedPosts.length / postsPerPage)}
          aria-label="Next page"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Performan;
