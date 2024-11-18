// Sidebar.js
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Layout, PenIcon } from "lucide-react";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-[#1C2434] text-white p-6 hidden md:block">
      <div className="flex flex-col items-start mb-2 ">
        <Link to="/" className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
          NEWS SQUAD
        </Link>
        <p className="text-xs text-gray-600 mt-1 pl-5">the art of publishing</p>
      </div>
      <nav>
        <h2 className="text-gray-400 text-sm mb-4">MENU</h2>
        <ul className="space-y-2">
          <li>
            <Link to={"/dashboard"}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <Layout className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/create-article"}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <PenIcon className="mr-2 h-4 w-4" />
                Create Article
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/AllPosts"}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <PenIcon className="mr-2 h-4 w-4" />
                Articles
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/AddCategory"}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <PenIcon className="mr-2 h-4 w-4" />
                Create Category
              </Button>
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/AllCategories"}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white"
              >
                <PenIcon className="mr-2 h-4 w-4" />
                All Categories
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
