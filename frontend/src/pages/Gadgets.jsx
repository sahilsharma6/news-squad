import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GadgetsMenu from '../components/GadgetsMenu';
import apiClient from '@/services/apiClient'; 

const Spinner = () => (
  <div className="flex justify-center items-center h-[500px]">
    <div className="spinner border-4 border-t-4 border-gray-500 border-t-transparent w-16 h-16 rounded-full animate-spin"></div>
  </div>
);

const Gadgets = ({ param }) => {
  const location = useLocation();
  
  const [recentArticles, setRecentArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10; 
  const [products, setProducts] = useState([
    { Name: "GADGETS", path: 'gadgets' },
    { Name: "MOBILE PHONES", path: 'mobile-phones' },
    { Name: "PHOTOGRAPHY", path: 'photography' },
    { Name: "REVIEWS", path: 'reviews' },
  ]); 

  useEffect(() => {
    const fetchRecentArticles = async () => {
      try {
        const response = await apiClient.get('/posts'); 
        if (response.data && response.data.posts) {
          setRecentArticles(response.data.posts.slice(0, 4)); 
        } else {
          setError('No posts available.');
        }
      } catch (err) {
        console.error("Error fetching recent articles:", err);
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecentArticles();
  }, []);

  const indexOfLastProduct = currentPage * articlesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - articlesPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="min-h-screen bg-white-100">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">{param.toUpperCase()}</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              
              {currentProducts.map((item) => (
                <li key={item.Name} className="text-xs">
                  <Link
                    to={`/category/${item.path}`}
                    className={`${
                      location.pathname === `/category/${item.path}` ? 'text-black font-bold' : 'text-blue-400'
                    } hover:text-black`}
                  >
                    {item.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-5 py-4 bg-white-800">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-2/3">
            <GadgetsMenu param={param} />
          </div>

          <aside className="lg:w-1/3">
            <div className="bg-white ml-2">
              <h3 className="text-xl font-bold mb-4">Recent Articles</h3>
              {loading ? (
                <Spinner />
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <ul className="space-y-4">
                  {recentArticles.length > 0 ? (
                    recentArticles.map((article) => {
                      const formattedDate = article.createdAt
                        ? new Date(article.createdAt).toLocaleDateString()
                        : "No Date Available";

                      return (
                        <li key={article._id} className="flex gap-4 items-center">
                          <Link to={`/post/${article._id}`} className="hover:text-blue-800 p-2 w-full flex items-center">
                            <img
                              src={import.meta.env.VITE_BACKEND_URL + article.image || 'https://via.placeholder.com/150'}
                              alt={article.title}
                              className="w-20 h-20 object-cover mr-4 rounded-md"
                            />
                            <div>
                              <h4 className="font-bold">{article.title}</h4>
                              <span className="text-blue-600 text-xs">{article.category?.name}</span>
                              <span className="text-gray-500 text-xs ml-2">{formattedDate}</span>
                            </div>
                          </Link>
                        </li>
                      );
                    })
                  ) : (
                    <p>No recent articles available.</p>
                  )}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Gadgets;
