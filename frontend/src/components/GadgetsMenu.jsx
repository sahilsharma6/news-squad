import { useState, useEffect } from 'react';

const GadgetsMenu = ({param}) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerPage = 2;

  useEffect(()=>{
setCurrentPage(1)
  },[param])
  useEffect(() => {
    setArticles([]);
    fetch(`http://localhost:5000/api/posts?category=${param}&page=${currentPage}&limit=${articlesPerPage}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        // Check if the data includes posts and pagination info
        if (data && data.posts) {
          setArticles(data.posts);
          setTotalPages(Math.ceil(data.totalPosts / articlesPerPage));  // Assuming 'totalPosts' is in the response
        }
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, [currentPage,param]);  // Re-fetch when the page changes

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {articles.map((article, index) => (
        <article className="overflow-hidden mb-8 flex flex-col sm:flex-row" key={index}>
          <div className="p-6 sm:w-2/5 bg-white ">
            <span className="text-blue-400 text-sm font-semibold">{param.toUpperCase()}</span>
            <h4 className="font-bold mt-2 hover:text-blue-400">
              <a href='#'>{article.title}</a>
            </h4>
            <p className="mt-4 text-gray-600 text-xs">{article.content}</p>
            <span className="text-gray-500 text-xs mt-4 block">{article.createdAt}</span>
          </div>
          <div className="sm:w-3/5  mr-2">
            <img src={article.featuredImage} alt="Smart home" className="w-full h-full object-cover" />
          </div>
        </article>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center space-x-1">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                &laquo;
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default GadgetsMenu;
