import React, { useState, useEffect } from 'react';
import apiClient from '@/services/apiClient'; 
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';

const GadgetsMenu = ({ param }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [param]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await apiClient.get(
          `/posts/category/${param}?page=${currentPage}&limit=${articlesPerPage}`
        );
        
        if (response.data && response.data.posts) {
          setArticles(response.data.posts);
          setTotalPages(Math.ceil(response.data.totalPosts / articlesPerPage));
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, [currentPage, param]); 


  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article, index) => {
   
   
          const contentWithoutImages = article.content.replace(/<img[^>]*>/g, '');

          return (
            <article className="overflow-hidden mb-8 flex flex-col items-center sm:flex-row" key={index}>
              <div className="p-6 sm:w-2/5 bg-white">
                <span className="text-blue-400 text-sm font-semibold">{param.toUpperCase()}</span>
                <h4 className="font-bold mt-2 hover:text-blue-400">
                  <a href={`/post/${article._id}`}>{article.title}</a>
                </h4>
                <p className="mt-4 text-gray-600 text-xs" dangerouslySetInnerHTML={{ __html: contentWithoutImages }}></p>
                <span className="text-gray-500 text-xs mt-4 block">
                  {new Date(article.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="sm:w-3/5 mr-2">
            
                <img
                  src={import.meta.env.VITE_BACKEND_URL + article.image || 'https://via.placeholder.com/150'}
                  alt={article.title}
                  className="h-[200px] object-cover"
                />
              </div>
            </article>
          );
        })
      ) : (
        'No Posts available.'
      )}

    </div>
  );
};

export default GadgetsMenu;
