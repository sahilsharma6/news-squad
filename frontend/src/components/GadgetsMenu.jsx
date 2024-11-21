import React, { useState, useEffect } from 'react';
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
  const articlesPerPage = 2;

  useEffect(() => {
    setCurrentPage(1);
  }, [param]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/posts/category/${param}?page=${currentPage}&limit=${articlesPerPage}`
        );
        const data = await response.json();

        if (data && data.posts) {
          console.log('akj',data);
          
          setArticles(data.posts);
          setTotalPages(Math.ceil(data.totalPosts / articlesPerPage));
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
console.log(articles);

return (
  <div>
    {articles.length > 0 ? (
      articles.map((article, index) => {
        // Inline image URL extraction using regex
        const imageUrl = article.content.match(/<img src="([^"]+)"/)?.[1] || article.featuredImage;
        const contentWithoutImages = article.content.replace(/<img[^>]*>/g, '');

        return (
          <article className="overflow-hidden mb-8 flex flex-col sm:flex-row" key={index}>
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
              {/* Use extracted image URL or fallback to featuredImage */}
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </article>
        );
      })
    ) : (
      'Post Not Found'
    )}

    {/* Pagination Controls */}
    {totalPages > 1 && (
      <div className="flex justify-center items-center mt-8">
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

            {/* Ellipsis */}
            {currentPage > 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}

            {/* Current Page */}
            {currentPage > 1 && currentPage < totalPages && (
              <PaginationItem>
                <PaginationLink href="#" className="font-bold">
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* Ellipsis */}
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

export default GadgetsMenu;
