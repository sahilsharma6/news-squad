import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GadgetsMenu from '../components/GadgetsMenu';

const Gadgets = ({ param }) => {
  const location = useLocation();
  

  const recentArticles = [
    { 
      id: "1", 
      title: "Another Big Apartment Project Slated for Broad Ripple Company", 
      category: "INTERIORS", 
      date: "AUGUST 7, 2019", 
      imgSrc: "https://via.placeholder.com/150" 
    },
    { 
      id: "2", 
      title: "Patricia Urquiola Coats Transparent Glas Tables for Livings", 
      category: "INTERIORS", 
      date: "AUGUST 7, 2019", 
      imgSrc: "https://via.placeholder.com/150" 
    },
    { 
      id: "3", 
      title: "Ambrose Seeks Offers on Downtown Building for Apartments", 
      category: "INTERIORS", 
      date: "AUGUST 7, 2019", 
      imgSrc: null 
    },
    { 
      id: "4", 
      title: "Taina Blue Retreat is a Converted Tower on the Greek Coast", 
      category: "INTERIORS", 
      date: "AUGUST 7, 2019", 
      imgSrc: "https://via.placeholder.com/150"
    },
  ];

  const [getRecentArticles, setRecentArticles] = useState(recentArticles);
  

  const products = [
    { Name: "GADGETS", path: 'gadgets' },
    { Name: "MOBILE PHONES", path: 'mobile-phones' },
    { Name: "PHOTOGRAPHY", path: 'photography' },
    { Name: "REVIEWS", path: 'reviews' }
  ];

  const [getProducts, setProducts] = useState(products);

  return (
    <div className="min-h-screen bg-white-100">
      <header className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold">{param.toUpperCase()}</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              {getProducts.map((item) => (
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
              <ul className="space-y-4">
                {getRecentArticles.map((article) => (
                  <li key={article.id} className="flex gap-4 items-center">
                    <Link to={`/post/${article.title}`} className=" hover:text-blue-800 p-2 w-full flex items-center">
                   
                      <img
                        src={article.imgSrc || 'https://via.placeholder.com/150'}
                        alt={article.title}
                        className="w-20 h-20 object-cover mr-4 rounded-md"
                      />
                      <div>
                        <h4 className="font-bold">{article.title}</h4>
                        <span className="text-blue-600 text-xs">{article.category}</span>
                        <span className="text-gray-500 text-xs ml-2">{article.date}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Gadgets;
