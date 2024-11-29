import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"; 
import apiClient from "@/services/apiClient";

const ArticleItem = ({ article }) => {
  if (!article) {
    return <div>No article data available</div>;
  }

  const formattedDate = article.createdAt
    ? format(new Date(article.createdAt), "MMMM dd, yyyy")
    : "No Date Available";

  return (
    <Link to={`/post/${article._id}`} key={article._id}>
      <div className="flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={import.meta.env.VITE_BACKEND_URL + article.image || "default-image.jpg"}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <span className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 uppercase rounded-tr-lg">
            {article.category?.name || "Uncategorized"}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold hover:text-blue-500">
            {article.title}
          </h3>
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>{article.author || "Unknown Author"}</span> -{" "}
            <span>{formattedDate}</span>
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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/posts");
        if (response.data && response.data.posts) {
         
          const sortedPosts = response.data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setNewsData(sortedPosts);
        } else {
          setError("No posts found.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        if (err.response) {
          setError(`Server Error: ${err.response.status} - ${err.response.data.message || "Unable to fetch posts"}`);
        } else if (err.request) {
          setError("Network Error: Please check your internet connection.");
        } else {
          setError(`Unexpected Error: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="text-center text-xl text-gray-700">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-[50%] text-xl text-black">{error}</p>;
  }

  const totalPages = Math.ceil(newsData.length / postsPerPage);

  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages); 
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2 rounded-md">
          LATEST ARTICLES
        </h2>
      </div>

      {newsData.length === 0 ? (
        <p className="text-center text-xl text-gray-700">No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentPosts.map((article) => (
            <ArticleItem key={article._id} article={article} />
          ))}
        </div>
      )}

      {newsData.length > 0 && (
        <div className="flex justify-center items-center mt-8">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => paginate(currentPage - 1)}
                  className={`${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                  }`}
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {/* Current Page */}
              <PaginationItem>
                <PaginationLink className="font-bold">{currentPage}</PaginationLink>
              </PaginationItem>

              {/* Ellipsis if needed */}
              {currentPage < totalPages - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  onClick={() => paginate(currentPage + 1)}
                  className={`${
                    currentPage === totalPages ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                  }`}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default Latest;
