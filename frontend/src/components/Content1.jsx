import React from "react";
import img1 from '../assets/article1.jpg';

const NewsLayout = () => {
  const articles = [
    {
      title: "Have a look around this bold and colourful 1930s semi in London",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Outdoor Kitchen Decorating: Furnish and Accessorize with Flair",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Interior Design Tips: Decorating to Celebrate the Great Outdoors",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Citroen Could Revive the Third Car for Loeb/Breen Winning Couple",
      date: "August 7, 2019",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 flex-1">
        {/* Navbar */}
        <div className="flex items-center justify-between border-b pb-1 mb-2 w-full">
          <h1 className="text-lg font-bold text-yellow-500">DON'T MISS</h1>
          <nav className="space-x-2 text-sm">
            <a href="#" className="text-gray-500 hover:text-yellow-500">All</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500">Style Hunter</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500">Vogue</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500">Health & Fitness</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500">Travel</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500">Gadgets</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500">More</a>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main article */}
          <div className="md:col-span-1">
            <img
              src={img1}
              alt="Main article"
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">
              Interior Designer and Maude Interiors by Yvonne Designs
            </h2>
            <p className="text-gray-500 mb-1">Armin Vans - August 7, 2019</p>
            <p className="text-gray-700">
              We woke reasonably late following the feast and free flowing wine the night before...
            </p>
          </div>

          {/* Side articles */}
          <div>
            {articles.map((article, index) => (
              <div key={index} className="flex mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 h-16 object-cover rounded-md mr-2"
                />
                <div>
                  <h3 className="text-md font-bold">{article.title}</h3>
                  <p className="text-gray-500">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
