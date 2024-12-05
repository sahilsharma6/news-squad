import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ChevronDown, Search, LogIn, LogOut } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { hamburgerMenu } from "@/Constants";
import apiClient from "@/services/apiClient";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const location = useLocation();
  const previousPathnameRef = React.useRef(location.pathname);

  useEffect(() => {
    if (previousPathnameRef.current !== location.pathname) {
      setIsMenuOpen(false);
      setOpenDropdown(null); 
      previousPathnameRef.current = location.pathname;
    }

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleSearch = async (searchQuery) => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await apiClient.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/posts/search?q=${searchQuery}`
      );
      setSearchResults(response.data);
    } catch (error) {
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      handleSearch(value);
    }, 300);
    setDebounceTimeout(timeout);
  };

  const handleResultClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex w-full items-center justify-between md:w-auto md:hidden">
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden">
            <Menu size={24} className="text-black dark:text-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-10">
          <ul className="flex flex-col gap-4">
            {hamburgerMenu.map((item) => (
              <li key={item.label} className="relative">
                <div className="flex justify-between items-center">
                  <Link
                    to={item.route}
                    className="text-base font-medium text-black transition-colors ease-in-out"
                    onClick={() => item.dropdown && toggleDropdown(item.label)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div
                      onClick={() => toggleDropdown(item.label)}
                      role="button"
                      tabIndex={0}
                      className="cursor-pointer"
                    >
                      <ChevronDown className="text-black" />
                    </div>
                  )}
                </div>
                {item.dropdown && openDropdown === item.label && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.route}
                          className="text-sm text-gray-700 transition-colors ease-in-out"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="flex justify-between items-center">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-base font-medium text-black transition-colors ease-in-out flex items-center"
                >
                  <LogOut size={16} className="mr-2" />
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="text-base font-medium text-black transition-colors ease-in-out flex items-center"
                >
                  <LogIn size={16} className="mr-2" />
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      <Link to="/">
        <div className="flex flex-col items-start mb-2">
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
            NEWS SQUAD
          </span>
          <p className="text-xs text-gray-600 mt-1 pl-5">the art of publishing</p>
        </div>
      </Link>

      <div className="flex items-center ">
        <Sheet>
          <SheetTrigger>
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Search</span>
              <Search className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full">
            <div className="py-7 flex flex-col items-center gap-2">
              <p className="text-base font-normal text-gray-600">Search</p>
              <input
                type="text"
                placeholder="Search..."
                className="w-full mt-2 p-2 border-gray-300 rounded-lg"
                value={query}
                onChange={handleInputChange}
              />
              {isLoading && <p className="text-gray-500">Loading...</p>}
              {searchResults.length > 0 && !isLoading && (
                <ul className="w-full mt-4">
                  {searchResults.map((post) => (
                    <li
                      key={post._id}
                      className="py-2 border-b flex items-center"
                      onClick={handleResultClick}
                    >
                      {post.image && (
                        <img
                          src={import.meta.env.VITE_BACKEND_URL + post.image}
                          alt={post.title}
                          className="w-8 h-8 object-cover mr-2"
                        />
                      )}
                      <Link
                        to={`/post/${post._id}`}
                        className="text-gray-700 hover:text-blue-600"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {searchResults.length === 0 && !isLoading && query.trim() !== "" && (
                <p className="text-gray-500 mt-2">No results found.</p>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
