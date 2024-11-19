import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';  // Correct import for useNavigate
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination'; 

const ArticleList = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesResponse = await axios.get('http://localhost:5000/api/posts/category/Style');
        setNewsData(articlesResponse.data.posts);
        setLoading(false);
      } catch (error) {
        setError('No posts available for this category.');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredNewsData = newsData.filter(newsItem => newsItem.category?.name === 'Style');
  const totalPosts = filteredNewsData.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

 
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages); 
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredNewsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
        {currentPosts.map((article, index) => {
          const formattedDate = article.createdAt
            ? format(new Date(article.createdAt), 'MMMM dd, yyyy')
            : 'No Date Available';

          return (
            <div 
              key={index} 
              className="flex items-start bg-white p-4 border rounded-md shadow-md cursor-pointer"  
              onClick={() => navigate(`/post/${article._id}`)} 
            >
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
                <span className="text-xs"> - {formattedDate}</span>
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
      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(currentPage - 1);
                  }}
                  className={`${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {/* Page 1 */}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(1);
                  }}
                  className={`${currentPage === 1 ? 'font-bold' : ''}`}
                >
                  1
                </PaginationLink>
              </PaginationItem>

              {/* Ellipsis if needed */}
              {currentPage > 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

              {/* Current Page */}
              <PaginationItem>
                <PaginationLink href="#" className="font-bold">
                  {currentPage}
                </PaginationLink>
              </PaginationItem>

              {/* Ellipsis if there are more pages */}
              {currentPage < totalPages - 1 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(currentPage + 1);
                  }}
                  className={`${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
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

export default ArticleList;
