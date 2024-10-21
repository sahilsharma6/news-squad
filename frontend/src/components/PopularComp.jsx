import React from 'react';

const articles = [
  {
    title: "KTM Marchetti Signs with Larranaga and Zanotti for Next Season",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "Celebrating 25 Years Since Italy’s First Ever Touring Inclusion",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "Rumors, Gossip and Unfounded Truths: Every Moto Release Story",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: "https://via.placeholder.com/300x150",
  },
];

const Performan = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm md:text-base p-2 inline-block bg-black text-center">Most Popular</h2>
      </div>
      
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="flex items-start bg-white">
            <img src={article.image} alt={article.title} className="w-1/4 h-16 object-cover" />
            <div className="p-3 w-3/4">
              <h2 className="text-xs md:text-sm mb-1">{article.title}</h2>
              <p className="text-xs text-gray-500 mb-1">By {article.author} - {article.date}</p>
              {/* <p className="text-gray-700 text-xs md:text-sm">{article.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performan;
