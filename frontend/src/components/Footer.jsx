import React, { useState, useEffect } from "react";
import apiClient from "@/services/apiClient";
import footer_bg from "../assets/footer-bg1.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await apiClient.get("/posts");
        const posts = response.data.posts;
console.log(posts);

     
        const popular = posts.sort((a, b) => b.views - a.views);
        setPopularPosts(popular.slice(0, 4));

    
        const shuffledPosts = posts.sort(() => 0.5 - Math.random());
        setAllPosts(shuffledPosts.slice(0, 4));
      } catch (error) {
        console.error("Error fetching footer data:", error);
        setError("An error occurred while fetching posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  if (loading) {
    return (
      <footer className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-12 flex justify-center items-center h-full">
          <div className="spinner"></div> 
        </div>
      </footer>
    );
  }

  if (error) {
    return (
      <footer className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <p>{error}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <img
        src={footer_bg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          <div>
            <h2 className="text-xl font-bold pb-4 uppercase">Editor Picks</h2>
            <ul className="space-y-6">
              {allPosts.length === 0 ? (
                <li>No posts available</li>
              ) : (
                allPosts.map((post) => (
                  <li
                    key={post._id}
                    className="flex gap-3 items-start md:items-center space-y-4 md:space-y-0 md:space-x-4"
                  >
                    <img
                      src={import.meta.env.VITE_BACKEND_URL + post.image}
                      alt={post.title}
                      className="w-28 md:w-24 md:h-16 object-cover"
                    />
                    <div>
                      <h4 className="hover:text-blue-500">
                        <a href={`/post/${post._id}`}>{post.title}</a>
                      </h4>
                      <p className="text-sm text-gray-400">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 uppercase">Popular Posts</h2>
            <ul className="space-y-6">
              {popularPosts.length === 0 ? (
                <li>No popular posts available</li>
              ) : (
                popularPosts.map((post) => (
                  <li
                    key={post._id}
                    className="flex gap-3 items-start md:items-center space-y-4 md:space-y-0 md:space-x-4"
                  >
                    <img
                      src={import.meta.env.VITE_BACKEND_URL + post.image}
                      alt={post.title}
                      className="w-28 h-auto md:w-24 md:h-16 object-cover"
                    />
                    <div>
                      <h4 className="hover:text-blue-500">
                        <a href={`/post/${post._id}`}>{post.title}</a>
                      </h4>
                      <p className="text-sm text-gray-400">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 uppercase">Categories</h2>
            <ul className="space-y-4">
              <li>
                <a href="/category/fashion" className="hover:text-blue-500">
                  Fashion
                </a>
              </li>
              <li>
                <a href="/category/gadgets" className="hover:text-blue-500">
                  Gadgets
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/category/lifestyle" className="hover:text-blue-500">
                  Lifestyle
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 mb-7 w-full md:w-2/3 mx-auto"></div>

        <div className="border-t border-gray-700 pt-5 grid grid-cols-1 md:grid-cols-2">
          <p className="text-sm lg:pt-0 pt-3 text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} News-Squad. All rights reserved.
          </p>

          <div className="hidden lg:flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to={'/policy'} className="hover:text-gray-200">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="hover:text-gray-200">
              Disclaimer
            </Link>
            <a href="#" className="hover:text-gray-200">
              Advertisement
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
