import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import apiClient from "@/services/apiClient";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await apiClient.get("/posts/category/Fashion");
        const sortedData = response.data.posts.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt); 
        });
        setNewsData(sortedData);
        setLoading(false);
      } catch (error) {
        setError("No posts available in the Fashion category.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="spinner"></div> 
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-xl text-black">{error}</p>;
  }

  const filteredNewsData = newsData.filter(newsItem => newsItem.category?.name === 'Fashion');

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredNewsData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredNewsData.length / postsPerPage);


  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="mx-[10%] my-8">
      <div className="border-b-2 border-purple-700 mb-4">
        <h2 className="text-lg bg-black text-white w-fit p-1 font-bold">LATEST NEWS</h2>
      </div>

      {filteredNewsData.length === 0 ? (
        <p>No posts available in the Fashion category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {currentPosts.map((newsItem) => {
            const formattedDate = newsItem.createdAt
              ? format(new Date(newsItem.createdAt), "MMMM dd, yyyy")
              : "No Date Available";

            return (
              <Link key={newsItem._id} to={`/post/${newsItem.param}`}>
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={import.meta.env.VITE_BACKEND_URL + newsItem.image || "/default-image.jpg"}
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
                      {newsItem.userId[0]?.username || "Admin"} - {formattedDate}
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

      {filteredNewsData.length > 0 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious href="#" onClick={handlePrevious} />
              </PaginationItem>

              {/* Page Numbers */}
              {[...Array(totalPages)]?.map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                  
                    onClick={() => handlePageChange(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}


              {totalPages > 5 && currentPage < totalPages - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  disabled={currentPage === totalPages}
                
                  onClick={handleNext}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
};

export default LatestNews;
