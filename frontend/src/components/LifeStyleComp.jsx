import React, { useState } from "react";
import img1 from '../assets/article1.jpg';

const NewsLayout2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const articles = [
    {
      title: "Have a look around this bold and colourful 1930s semi in London",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Outdoor Kitchen Decorating: Furnish and Accessorize with Flair",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
    
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b pb-3 mb-6">
        <h1 className="text-sm text-white bg-green-800 p-2">LIFESTYLE NEWS</h1>
        <nav className="relative">
          <div className="flex items-center space-x-2">
            <a href="#" className="text-gray-600 hover:text-green-600">All</a>
            <div className="hidden md:flex">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 md:mr-2 text-sm">Travel</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 md:mr-2 text-sm">Recipes</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 md:mr-2 text-sm">Health & Fitness</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 md:mr-2 text-sm">Music</a>
            </div>
            <button 
              onClick={toggleDropdown} 
              className="text-gray-600 hover:text-green-600 md:hidden"
            >
              More
            </button>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 md:flex md:static md:bg-transparent md:border-0 md:shadow-none md:mt-0">
              <div className="flex flex-col md:flex-row p-2 md:p-0">
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600">Travel</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600">Recipes</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600">Health & Fitness</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600">Music</a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Article 1 */}
        <div className="flex flex-col">
        <div className="relative">
          <img
            src={img1}
            alt="Article 1"
            className="w-full h-48 object-cover"
          />
          <span className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 inline-block mb-2 hover:bg-green-600">Architecture</span>
          </div>
          <div className="mt-4">
            
            <h2 className="mt-2 text-xl font-semibold hover:text-green-600">Now Is the Time to Think About Your Small-Business Success</h2>
            <p className="text-sm text-gray-600">Armin Vans - June 19, 2019</p>
            <p className="mt-2 text-gray-700">
              We woke reasonably late following the feast and free-flowing wine the night before...
            </p>
          </div>
        </div>

        {/* Article 2 */}
        <div className="flex flex-col">
        <div className="relative">
          <img
            src={img1}
            alt="Article 1"
            className="w-full h-48 object-cover"
          />
          <span className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 inline-block mb-2 hover:bg-green-600">Architecture</span>
          </div>
          <div className="mt-4">
            <h2 className="mt-2 text-xl font-semibold hover:text-green-600">Radio Air Time Marketing: A New Strategy for the Economy</h2>
            <p className="text-sm text-gray-600">Armin Vans - June 19, 2019</p>
            <p className="mt-2 text-gray-700">
              We woke reasonably late following the feast and free-flowing wine the night before...
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row  md:gap-4">
      <div className="grid grid-cols-1 gap-6 mt-6">
        {/* Related Articles */}
        {articles.map((article, index) => (
          <div key={index} className="flex items-center">
            <img
              src={article.image}
              alt={article.title}
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h3 className="text-sm hover:text-green-600">{article.title}</h3>
              <p className="text-xs text-gray-600">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6">
        {/* Related Articles */}
        {articles.map((article, index) => (
          <div key={index} className="flex items-center">
            <img
              src={article.image}
              alt={article.title}
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h3 className="text-sm hover:text-green-600">{article.title}</h3>
              <p className="text-xs text-gray-600">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default NewsLayout2;
