import React from 'react';
import img1 from '../assets/img1.jpg';

const articles = [
  {
    title: "KTM Marchetti Signs with Larranaga and Zanotti for Next Season",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: img1,
  },
  {
    title: "Celebrating 25 Years Since Italy’s First Ever Touring Inclusion",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: img1,
  },
  {
    title: "Rumors, Gossip and Unfounded Truths: Every Moto Release Story",
    date: "August 7, 2019",
    author: "Armin Vans",
    description: "We woke reasonably late following the feast and free-flowing wine the night before...",
    image: img1,
  },
];

const Mustread = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4">
          <span className="text-white text-sm p-2  bg-black">
            MUST READ
          </span>
          <br className=""></br>
          <div className="pt-1">
  <hr className="border-black  pt-2 border-double" />
</div>

        </h2>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={index} className="items-start bg-white hover:text-blue-500">
            <img src={article.image} alt={article.title} className="w-80 h-40 object-cover" />
            <div className="text-left ">
              <h2 className="text-xl md:text-xl font-semibold mb-2 hover:text-blue-500 pt-4">{article.title}</h2>
              <span className="text-xs  mb-2 text-black">By {article.author} - {article.date}</span>
              {/* <p className="text-gray-700 hidden md:block">{article.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mustread;
