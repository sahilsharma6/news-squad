import React from 'react';
import img1 from '../assets/img1.jpg';
const articles = [
  {
    category: 'Business',
    title: 'Study 2020: Fake Engagement is Only Half the Problem',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    overlayColor: 'bg-red-400',
  },
  {
    category: 'Business',
    title: 'What Do I Need to Make It in the World of Business?',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    overlayColor: 'bg-green-400',
  },
  {
    category: 'Business',
    title: 'Ecommerce Brands Tend to Create Strong Communities',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    overlayColor: 'bg-purple-400',
  },
  {
    category: 'Business',
    title: 'Top 10 Interior Design in 2020 New York Business',
    author: 'Armin Vans',
    date: 'August 7, 2019',
    image: img1,
    overlayColor: 'bg-blue-400',
  },
];

const LifestyleSection = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <div className="text-left md:mx-[10%] px-4 md:px-0">
        <div className="text-xs text-gray-500">Home &gt; Lifestyle</div>
        <h1 className="text-4xl font-bold">LIFESTYLE</h1>
        <div className="flex  gap-2 mt-4 text-xs">
          <span className="px-2 py-1 bg-white text-xs font-semibold text-gray-700 border ">Business</span>
          <span className="px-2 py-1 bg-white text-xs font-semibold text-gray-700  border">Health & Fitness</span>
          <span className="px-2 py-1 bg-white text-xs font-semibold text-gray-700  border">Recipes</span>
          <span className="px-2 py-1 bg-white text-xs font-semibold text-gray-700  border">Travel</span>
        </div>
        <p className="text-gray-500 mt-2 italic">
          Custom category description. You must learn one thing. The world was made to be free in. Give up all the
          other worlds except the one in which you belong.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mt-8">
        {articles.map((article, index) => (
          <div key={index} className="relative group">
            <img src={article.image} alt={article.title} className="w-max h-72 object-cover" />
            <div className={`absolute inset-0 ${article.overlayColor} opacity-75 group-hover:opacity-50 transition duration-300`}></div>
            <div className="absolute bottom-0 left-0 p-4 text-white z-10">
              <span className="text-sm">{article.category}</span>
              <h2 className="font-bold text-lg mt-2">{article.title}</h2>
              <p className="text-sm mt-1">
                {article.author} - {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleSection;
