import React from "react";
import img1 from '../assets/img1.jpg'
// Sample article data
const articles = [
  {
    title: "Another Big Apartment Project Slated for Broad Ripple Company",
    category: "Interiors",
    date: "August 7, 2019",
    image: img1,
    comments: 1,
  },
  {
    title: "Patricia Urquiola Coats Transparent Glas Tables for Livings",
    category: "Interiors",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 1,
  },
  {
    title: "Ambrose Seeks Offers on Downtown Building for Apartments",
    category: "Interiors",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 0,
  },
  {
    title: "Taina Blue Retreat is a Converted Tower on the Greek Coast",
    category: "Interiors",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 0,
  },
  {
    title: "Exploring the Latest Trends in Modern Architecture",
    category: "Architecture",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 2,
  },
  {
    title: "Sustainable Living: Innovative Home Designs for 2020",
    category: "Sustainability",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 3,
  },
  {
    title: "The Rise of Minimalist Interior Design",
    category: "Interiors",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 1,
  },
  {
    title: "How to Choose the Right Color Palette for Your Home",
    category: "Decor",
    date: "August 7, 2019",
    image: "https://via.placeholder.com/300x200",
    comments: 0,
  },
];

// ArticleItem Component
const ArticleItem = ({ article }) => {
  return (
    <div className="bg-white mb-1">
      <div className="relative">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <span className="absolute bottom-0 left-0 text-xs bg-gray-800 text-white px-2 py-1 rounded-md">
            {article.category}
          </span>
          </div>
      <div className="p-4">
        <div className="text-xs uppercase text-gray-500 mb-1">
          
        </div>
        <h2 className="text-lg font-semibold hover:text-blue-500">
          {article.title}
        </h2>
        <p className="text-sm text-gray-500">{article.date}</p>
      </div>
    </div>
  );
};

// Main App Component
function Latest() {
  return (
    <div className="container mx-auto p-4">
      {/* Section title */}
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">
          LATEST ARTICLE
        </h2>
      </div>

      {/* Article List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Latest;
