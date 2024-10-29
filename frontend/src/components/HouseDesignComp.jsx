
import React from 'react';

// Sample data for articles
const articles = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Monochrome Home",
    category: "Architecture",
    title: "Modern Monochrome Home with Calm and Cosy Terrace and Steps",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Scandinavian Boho",
    category: "Architecture",
    title: "Scandinavian Boho Three-bed Decorated with Neutral Tones",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Four-Bedroom House",
    category: "Architecture",
    title: "Luxurious Four-Bedroom House with Roman Stone Bath House",
  },
];

const HouseDesignSection = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section Title */}
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm p-2 inline-block bg-gray-500">HOUSE DESIGN</h2>
      </div>
      <div className="pt-2">
        <hr className="border-black pt-2" />
      </div>

      {/* Articles Grid */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-4">
        {articles.map((article) => (
          <div key={article.id} className='flex md:block'>
            <div className='relative'>
            <img
              src={article.imgSrc}
              alt={article.altText}
              className="md:w-full h-40 " // Adjust width here
            />
            <span className=" bg-black text-white px-2 py-1 absolute bottom-0 left-0 text-xs ">{article.category}</span>
            </div>
            <div className="mt-2">
              
              <h3 className="mt-2 text-sm ">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseDesignSection;
