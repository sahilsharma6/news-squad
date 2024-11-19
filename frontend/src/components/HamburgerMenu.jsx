import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ChevronDown, Search, User, LogIn, LogOut, Home } from "lucide-react"; // Icons
import React, { useState } from "react";
import { hamburgerMenu } from "@/Constants";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const previousPathnameRef = React.useRef(location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in

  React.useEffect(() => {
    if (previousPathnameRef.current !== location.pathname) {
      setIsMenuOpen(false);
      setOpenDropdown(null); 
      previousPathnameRef.current = location.pathname;
    }

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Check token to determine login status
  }, [location.pathname]);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update login state
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
                          className="text-sm text-gray-700  transition-colors ease-in-out"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Admin or Sign In/Sign Out Button */}
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

      {/* Logo */}
      <Link to="/">
        <div className="flex flex-col items-start mb-2 ">
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
            NEWS SQUAD
          </span>
          <p className="text-xs text-gray-600 mt-1 pl-5">
            the art of publishing
          </p>
        </div>
      </Link>

      {/* Search Button */}
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
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
