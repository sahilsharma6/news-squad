import React from "react";
import { AiOutlineLike } from "react-icons/ai";

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
    <footer className="mt-8 bg-gray-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 flex items-center space-x-4">
        
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleLike} 
              className={`px-3 py-1 rounded-full transition-colors duration-300 ease-in-out flex items-center space-x-2 
                ${isLiked ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              <AiOutlineLike size={16} color="white" />
              <span className="text-white">{isLiked ? "Liked" : "Like"}</span>
            </button>
            <span className="font-semibold text-gray-700">{likes}</span>
          </div>

          <span className="text-gray-500">•</span>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-700">Views:</span>
            <span className="text-gray-600">{formatViews(views)}</span> 
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Tags:</span> {tags.join(", ")}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">About the Author</h3>
        <p>{authorDes}</p>
        <a href={authorLink} className="text-blue-500">Name: {author}</a>
      </div>

      <div className="mt-6 flex justify-between">
        {previousArticle && (
          <div>
            <span className="text-sm text-gray-500">Previous Article</span>
            <h4 className="font-semibold text-blue-600">{previousArticle.title}</h4>
          </div>
        )}
        {nextArticle && (
          <div>
            <span className="text-sm text-gray-500">Next Article</span>
            <h4 className="font-semibold text-blue-600">{nextArticle.title}</h4>
          </div>
        )}
      </div>
    </footer>
  );
};

export default PostFooter;
