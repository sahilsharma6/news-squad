import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { format } from "date-fns"; // Import date-fns for date formatting
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"; // Import the pagination components

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]); // Store all news articles
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [postsPerPage] = useState(5); // Number of posts per page (adjustable)
=======
import { format } from "date-fns";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
>>>>>>> ce64647f0ef853a387bd818ed94535e38c1419c6

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts/category/Fashion");
        setNewsData(response.data.posts);
        setLoading(false);
      } catch (error) {
        setError("Failed to load news");
        setLoading(false);
      }
    };
<<<<<<< HEAD

    fetchNews();
  }, []); // Empty dependency array to run once when the component mounts
=======
    fetchNews();
  }, []);
>>>>>>> ce64647f0ef853a387bd818ed94535e38c1419c6

  if (loading) {
    return <p className="text-center text-xl text-gray-700">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-600">{error}</p>;
  }

  const filteredNewsData = newsData.filter(newsItem => newsItem.category?.name === 'Fashion');

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredNewsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(filteredNewsData.length / postsPerPage);

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
            const formattedDate = newsItem.createdAt
<<<<<<< HEAD
              ? format(new Date(newsItem.createdAt), "MMMM dd, yyyy") // Format as Month day, year
              : "No Date Available"; // Fallback if no date available

            return (
              <Link key={newsItem._id} to={`/post/${newsItem._id}`}>
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={newsItem.image || "default-image.jpg"} // Adjust image property if needed
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
=======
              ? format(new Date(newsItem.createdAt), "MMMM dd, yyyy")
              : "No Date Available";

            return (
              <div key={newsItem._id} className="flex flex-col hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                {/* Wrap the entire block inside the Link to make the whole card clickable */}
                <Link to={`/post/${newsItem._id}`} className="block">
                  <div>
                    <h3 className="text-lg font-bold hover:text-blue-500">{newsItem.title}</h3>
                    <div className="relative">
                      <img
                        src={newsItem.image || "default-image.jpg"}
                        alt={newsItem.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-0 left-0 bg-black text-white text-xs px-2 py-1 uppercase">
                        {newsItem.category?.name || "No Category"}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        {newsItem.author || "Unknown Author"} - {formattedDate}
                        <div className="flex bg-black justify-between text-sm text-white px-1">
                          <span>{newsItem.views || 0}</span>
                        </div>
>>>>>>> ce64647f0ef853a387bd818ed94535e38c1419c6
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-center mt-6">
<<<<<<< HEAD
        <Pagination>
          {/* Previous Button */}
          <PaginationPrevious
            className={`px-4 py-2 bg-gray-700 text-white rounded-full transition-all duration-300 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"}`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1} // Disable if on first page
=======
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-l-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(Math.ceil(filteredNewsData.length / postsPerPage))].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} border`}
            onClick={() => paginate(index + 1)}
>>>>>>> ce64647f0ef853a387bd818ed94535e38c1419c6
          >
            Previous
          </PaginationPrevious>

<<<<<<< HEAD
          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-full transition-all duration-300 border`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationNext
            className={`px-4 py-2 bg-gray-700 text-white rounded-full transition-all duration-300 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-600"}`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages} // Disable if on last page
          >
            Next
          </PaginationNext>
        </Pagination>
=======
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-r-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredNewsData.length / postsPerPage)}
        >
          Next
        </button>
>>>>>>> ce64647f0ef853a387bd818ed94535e38c1419c6
      </div>
    </section>
  );
};

export default LatestNews;
