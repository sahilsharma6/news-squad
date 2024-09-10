// src/components/Footer.jsx
import React from 'react';
import footer_bg from "../assets/footer-bg1.jpg";
import editorImage1 from "../assets/blog-1.jpg";  
import editorImage2 from "../assets/blog-1.jpg";  
import editorImage3 from "../assets/blog-1.jpg";  
import popularImage1 from "../assets/blog-1.jpg";
import popularImage2 from "../assets/blog-1.jpg";
import popularImage3 from "../assets/blog-1.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-black  text-white">
      {/* Darker Black Overlay */}
      <div className="absolute inset-0 bg-black h-full opacity-90"></div>

      {/* Background Image */}
      <img
        src={footer_bg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-8 pb-12">
          {/* Editor Picks with Images */}
          <div>
            <h2 className="text-xl font-bold pb-4">Editor Picks</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-4">
                <img src={editorImage1} alt="Editor Pick 1" className="w-28 h-20 object-cover" />
                <div>
                  <h4 className= "hover:text-blue-500">Modern Monochrome Home</h4>
                  <p className="text-sm text-gray-400">August 7, 2019</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src={editorImage2} alt="Editor Pick 2" className="w-28 h-20 object-cover" />
                <div>
                  <h4 className= "hover:text-blue-500">How To Use Basic Design</h4>
                  <p className="text-sm text-gray-400">August 7, 2019</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src={editorImage3} alt="Editor Pick 3" className="w-28 h-20 object-cover" />
                <div>
                  <h4 className= "hover:text-blue-500">Urban Kitchen with Granite Tops</h4>
                  <p className="text-sm text-gray-400">August 7, 2019</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Popular Posts with Images */}
          <div>
            <h2 className="text-xl font-bold mb-4">Popular Posts</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-4">
                <img src={popularImage1} alt="Popular Post 1" className="w-28 h-20 object-cover" />
                <div>
                  <h4 className= "hover:text-blue-500">Discover the Most Magical Sunset in Santorini</h4>
                  <p className="text-sm text-gray-400">August 7, 2019</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src={popularImage2} alt="Popular Post 2" className="w-28 h-20 object-cover" />
                <div>
                  <h4 className= "hover:text-blue-500">Game Changing Virtual Reality Console</h4>
                  <p className="text-sm text-gray-400">August 7, 2019</p>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src={popularImage3} alt="Popular Post 3" className="w-28 h-20 object-cover" />
                <div>
                  <h4 className= "hover:text-blue-500">Computer Filters Noise to Make You a Better Listener</h4>
                  <p className="text-sm text-gray-400">August 7, 2019</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Popular Categories with Space Between */}
          <div>
            <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className= "hover:text-blue-500">Racing</span>
                <span className= "hover:text-blue-500">(20)</span>
              </li>
              <li className="flex justify-between">
                <span className= "hover:text-blue-500">Travel</span>
                <span className= "hover:text-blue-500">(15)</span>
              </li>
              <li className="flex justify-between">
                <span className= "hover:text-blue-500">Interiors</span>
                <span className= "hover:text-blue-500">(15)</span>
              </li>
              <li className="flex justify-between">
                <span className= "hover:text-blue-500">Architecture</span>
                <span className= "hover:text-blue-500">(15)</span>
              </li>
              <li className="flex justify-between">
                <span className= "hover:text-blue-500">Make it Modern</span>
                <span className= "hover:text-blue-500">(15)</span>
              </li>
            </ul>
          </div>
        </div>

<div className="border-t border-gray-700 mt-4 mb-7 w-2/3 m-auto"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center">
            {/* <img src="your-logo-url-here" alt="Logo" className="w-24 mb-4" /> */}
            <h1 className="uppercase font-bold font-serif text-3xl">news-squad</h1>
          </div>

          {/* About Us */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4 uppercase">About Us</h2>
            <p className="text-gray-400">
              Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 uppercase ">Follow Us</h2>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="hover:text-blue-600">Facebook</a>
              <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
              <a href="https://vk.com" className="hover:text-blue-400">VK</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-5 -mb-1 grid grid-cols-2">
          {/* Left: Copyright */}
          <p className="text-sm text-gray-400">&copy; 2024 News-Squad. All rights reserved.</p>

          {/* Right: Footer Links */}
          <div className="flex gap-4 justify-end">
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Disclaimer</a>
            <a href="#" className="hover:text-gray-200">Advertisement</a>
            <a href="#" className="hover:text-gray-200">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
