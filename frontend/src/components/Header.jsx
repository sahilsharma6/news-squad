import React from 'react';

const Header = () => {
  return (
    <div className="font-sans">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="flex justify-between items-center py-5 bg-white shadow-md flex-wrap">
          <div className="flex flex-col items-start mb-2 pl-24">
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              NEWS SQUAD
            </span>
            <p className="text-xs text-gray-600 mt-1 pl-5">the art of publishing</p>
          </div>

          <div className="text-center my-2">
            <img
              src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg.webp"
              alt="Advertisement"
              className="max-w-full h-auto"
            />
          </div>

          <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
            <a href="#" className="text-lg text-gray-800 hover:text-blue-500">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </header>

        <nav className="flex justify-center py-2 bg-white border-t border-b border-gray-300 font-bold flex-wrap pr-96">
          <a href="#news" className="mx-4 my-2 text-base text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
            NEWS
          </a>
          <a href="#fashion" className="mx-4 my-2 text-base text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
            FASHION
          </a>
          <a href="#gadgets" className="mx-4 my-2 text-base text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
            GADGETS
          </a>
          <a href="#lifestyle" className="mx-4 my-2 text-base text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
            LIFESTYLE
          </a>
          <a href="#video" className="mx-4 my-2 text-base text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
            VIDEO
          </a>
          <a href="#features" className="mx-4 my-2 text-base text-black hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
            FEATURES
          </a>
        </nav>

        <div className="flex items-center py-2 bg-gray-100 flex-wrap">
          <span className="bg-black text-white text-xs py-1 px-2 mr-4 rounded">
            TRENDING NOW
          </span>
          <span className="text-base text-gray-800">
            Another Big Apartment Project Slated for Broad Ripple Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
