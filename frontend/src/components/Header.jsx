import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from "./NavigationMenu";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div className="font-sans">
      <div className="max-w-screen-xl mx-auto px-4">
        <header className="flex justify-between items-center py-5 bg-white shadow-md flex-wrap">
          <div className="flex flex-col items-start mb-2 pl-24">
            <Link to="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              NEWS SQUAD
            </Link>
            <p className="text-xs text-gray-600 mt-1 pl-5">The Art of Publishing</p>
          </div>

          <div className="text-center my-2">
            <img
              src="https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/newspaper-rec728.jpg.webp"
              alt="Advertisement"
              className="max-w-full h-auto"
            />
          </div>

          <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
            <button className="text-lg text-gray-800 hover:text-blue-500" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </header>

 

       
          <NavigationMenu />
          <HamburgerMenu />
      
      </div>
    </div>
  );
};

export default Header;
