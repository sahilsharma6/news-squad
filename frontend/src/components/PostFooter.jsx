import React from "react";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { FaTags } from "react-icons/fa";

const formatViews = (views) => {
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + "k";  
  }
  return views;  
};

const PostFooter = ({
  likes,
  views,
  tags,
  previousArticle,
  nextArticle,
  author,
  authorLink,
  authorDes,
  handleLike,
  isLiked, 
}) => {
  return (
    <footer className="mt-8 bg-white p-10 rounded-lg shadow-md border-t border-gray-200">
  
      <div className="flex flex-col sm:flex-row justify-between items-start space-y-6 sm:space-y-0 sm:space-x-6">
    
        <div className="flex sm:flex-row items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleLike} 
              className={`px-2 py-1 rounded-full transition-colors duration-300 ease-in-out items-center space-x-2 
                ${isLiked ? " from-blue-500  to-purple-600 bg-gradient-to-r hover:from-blue-600 hover:to-purple-700" : "bg-gray-400 hover:bg-gray-500 text-black"}`}
            >
              <AiOutlineLike size={20} color="white" />
            </button>
            <span className="font-semibold text-gray-700">{likes}</span>
          </div>

          <span className="text-gray-500">•</span>

          <div className="flex items-center justify-center space-x-2">
            <AiOutlineEye size={20} className="text-gray-600" />
            <span className="text-gray-600">{formatViews(views)}</span> 
          </div>
        </div>

        {/* Tags Section */}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FaTags size={18} className="text-gray-600" />
          <span>{tags.join(", ")}</span>
        </div>
      </div>

      {/* About the Author Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">About the Author</h3>
        <p className="text-sm text-gray-600 mt-2">{authorDes}</p>
        <span className="text-sm text-gray-500">Written by </span>
        <a href={authorLink} className="text-blue-600 hover:text-blue-700 font-semibold">{author}</a>
      </div>

      {/* Previous and Next Article Links */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0">
        {previousArticle && (
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Previous Article</span>
            <h4 className="font-semibold text-blue-600 hover:text-blue-700">{previousArticle.title}</h4>
          </div>
        )}
        {nextArticle && (
          <div className="text-sm text-gray-500 text-right sm:text-left">
            <span className="font-semibold">Next Article</span>
            <h4 className="font-semibold text-blue-600 hover:text-blue-700">{nextArticle.title}</h4>
          </div>
        )}
      </div>
    </footer>
  );
};

export default PostFooter;
