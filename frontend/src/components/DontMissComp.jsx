import React, { useState } from "react";
import img1 from '../assets/article1.jpg';

const NewsLayout = () => {
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
    {
      title: "Interior Design Tips: Decorating to Celebrate the Great Outdoors",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Citroen Could Revive the Third Car for Loeb/Breen Winning Couple",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 flex-1">
        {/* Navbar */}
        <div className="flex items-center justify-between border-b pb-1 mb-2 w-full">
          <h1 className="  text-black bg-yellow-500 text-sm p-2 ">DON'T MISS</h1>
          <div className="pt-1">

          </div>

          <nav className="relative">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-gray-500 hover:text-yellow-500">All</a>
              <div className="hidden md:flex">
                <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2 text-sm">Style Hunter</a>
                <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2 text-sm">Vogue</a>
                <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2 text-sm">Health & Fitness</a>
                <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2 text-sm">Travel</a>
                <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 text-sm">Gadgets</a>
              </div>

              <button
                onClick={toggleDropdown}
                className="text-gray-500 hover:text-yellow-500 md:hidden"
              >
                More
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 md:flex md:static md:bg-transparent md:border-0 md:shadow-none md:mt-0">
                <div className="flex flex-col md:flex-row p-2 md:p-0">
                  <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2">Style Hunter</a>
                  <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2">Vogue</a>
                  <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2">Health & Fitness</a>
                  <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500 md:mr-2">Travel</a>
                  <a href="#" className="block px-4 py-2 text-gray-500 hover:text-yellow-500">Gadgets</a>
                </div>
              </div>
            )}
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main article */}
          <div className="md:col-span-1">
            <img
              src={img1}
              alt="Main article"
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-bold mt-2 hover:text-yellow-400">
              Interior Designer and Maude Interiors by Yvonne Designs
            </h2>
            <p className="text-gray-500 mb-1">Armin Vans - August 7, 2019</p>
            <p className="text-gray-700">
              We woke reasonably late following the feast and free flowing wine the night before...
            </p>
          </div>

          {/* Side articles */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:flex-wrap md:gap-4">
            {articles.map((article, index) => (
              <div key={index} className="flex">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 h-16 object-cover rounded-md mr-2"
                />
                <div>
                  <h3 className="text-md hover:text-yellow-500">{article.title}</h3>
                  <p className="text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
