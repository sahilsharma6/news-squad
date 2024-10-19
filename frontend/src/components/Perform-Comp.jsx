import React from 'react';
import img1 from '../assets/img1.jpg'
const articles = [
  {
    title: "KTM Marchetti Signs with Larranaga and Zanotti for Next Season",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image:img1, // Replace with real image URL
  },
  {
    title: "Celebrating 25 Years Since Italy’s First Ever Touring Inclusion",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: "https://via.placeholder.com/300x150", // Replace with real image URL
  },
  {
    title: "Rumors, Gossip and Unfounded Truths: Every Moto Release Story",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: "https://via.placeholder.com/300x150", // Replace with real image URL
  },
];

const Performance = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm p-2 inline-block  bg-black ">Performance Training</h2>
      </div>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="flex items-start bg-white hover:text-blue-500">
            <img src={article.image} alt={article.title} className="w-1/3 h-32 object-cover" />
            <div className="pl-4 w-2/3">
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-500">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-2">By {article.author} - {article.date}</p>
              <p className="text-gray-700">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
