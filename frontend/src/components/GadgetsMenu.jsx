import { useState, useEffect } from 'react';
import Pagination from './ui/pagination'

const GadgetsMenu = ({ param }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 2;

  useEffect(() => {
    setCurrentPage(1);
  }, [param]);  // Reset to page 1 when category changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/category/${param}?page=${currentPage}&limit=${articlesPerPage}`);
        const data = await response.json();
        
        if (data && data.posts) {
          setArticles(data.posts);
          setTotalPages(Math.ceil(data.totalPosts / articlesPerPage));  // Assuming totalPosts is included in the response
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    
    fetchData();
  }, [currentPage, param]);  // Re-fetch when currentPage or param changes

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  return (
    <div>
      {articles.map((article, index) => (
        <article className="overflow-hidden mb-8 flex flex-col sm:flex-row" key={index}>
          <div className="p-6 sm:w-2/5 bg-white">
            <span className="text-blue-400 text-sm font-semibold">{param.toUpperCase()}</span>
            <h4 className="font-bold mt-2 hover:text-blue-400">
              <a href={`/post/${article._id}`}>{article.title}</a>
            </h4>
            <p className="mt-4 text-gray-600 text-xs">{article.content}</p>
            <span className="text-gray-500 text-xs mt-4 block">{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="sm:w-3/5 mr-2">
            <img src={article.featuredImage} alt={article.title} className="w-full h-full object-cover" />
          </div>
        </article>
      ))}

      {/* Pagination Controls */}
       <div className="flex justify-center items-center mt-8">
         {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={paginate}
      />
      </div>
    </div>
  );
};

export default GadgetsMenu;
