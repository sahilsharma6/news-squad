import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import FilterableBlog from "./FilterableBlogs";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import apiClient from "@/services/apiClient";

export default function NavigationMenu() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [search, setSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const navigateTo = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);

      const fetchUserProfile = async () => {
        try {
          const response = await apiClient.get("/user/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setIsAdmin(response.data.role === "admin");
        } catch (error) {
          console.error("Failed to fetch user profile", error);
        }
      };
      fetchUserProfile();
    }
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "FASHION":
        return <FilterableBlog />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
    navigateTo("/");
  };

  const handleSearch = async () => {
    if (query.trim().length > 0) {
      setIsLoading(true);
      try {
        const response = await apiClient.get(
          `/posts/search?q=${query}`
        );
       
        if (response.data && response.data.length > 0) {
          setSearchResults(response.data.slice(0, 3));
        } else {
          setSearchResults([]);
        }
      } catch (err) {
        console.error("Error searching posts:", err);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchResults([]);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const timeout = setTimeout(() => {
        handleSearch();
      }, 300);
      setDebounceTimeout(timeout);
    }
  };

  const menuItems = ["NEWS", "FASHION", "GADGETS", "LIFESTYLE"];

  return (
    <nav className="border-b border-gray-200 p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => setActiveComponent(item)}
                  onMouseLeave={() => setActiveComponent(null)}
                  className="group"
                >
                  <Link
                    to={
                      item === "NEWS" ? "/" : `/category/${item.toLowerCase()}`
                    }
                    className={`inline-flex items-center px-1 pt-1 pb-2 border-b-2 text-base font-semibold ${
                      location.pathname.includes(item.toLowerCase())
                        ? "border-blue-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {item}
                    {["FASHION"].includes(item) && (
                      <svg
                        className="ml-2 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                  {activeComponent === item &&
                    ["FASHION", "GADGET"].includes(item) && (
                      <div className="absolute left-0 w-full mt-1 p-4 border border-gray-300 rounded-lg bg-white shadow-lg z-[99999]">
                        {renderComponent()}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          <div className="md:flex h-10 w-full items-center justify-end hidden relative ">
            <button
              type="button"
              onClick={() => {
                setSearch(!search);
                setDropdownOpen(false);
              }}
              className="mx-2 text-gray-800 hover:text-blue-500"
            >
              <Search className="h-7 w-7" aria-hidden="true" />
            </button>

            {search && (
              <div
                ref={searchRef}
                className="absolute left-0 top-10 w-full mt-1 p-4 border border-gray-300 rounded-lg bg-white shadow-lg z-[99999]"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={query}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={handleSearch}
                    className="hover:text-sky-600 duration-300"
                  >
                    Search
                  </button>
                </div>

                {isLoading ? (
                  <div className="mt-4 text-center">Loading...</div>
                ) : searchResults.length > 0 ? (
                  <div className="mt-2 grid grid-cols-1 gap-4">
                    {searchResults.map((post) => (
                      <div
                        key={post._id}
                        className="p-2 border-b rounded-md shadow-sm"
                      >
                        <Link
                          to={`/post/${post.param}`}
                          className="flex items-center space-x-4"
                        >
                          <img
                            src={
                              import.meta.env.VITE_BACKEND_URL + post.image ||
                              "https://via.placeholder.com/150"
                            }
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex flex-col">
                            <h4 className="font-semibold text-lg">
                              {post.title}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {post.introDescription.slice(0, 100)}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No posts found</p>
                )}
              </div>
            )}

            {/* User Profile Dropdown */}
            <div className="relative mx-2">
              <button
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setSearch(false);
                }}
                className="w-12 h-12 rounded-full flex items-center justify-center  bg-gray-200 border-2 border-gray-300"
              >
                <FiUser className="text-gray-800 text-2xl" />
              </button>

              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 w-48 mt-2 p-2 border border-gray-300 rounded-lg bg-white shadow-lg z-50"
                >
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      to="/signin"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign In
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
