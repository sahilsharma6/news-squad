import React, { useState } from 'react';

const articles = [
  {
    title: "Sneak Peak: Best Smart Home Gadgets & Features of 2020",
    link: "https://demo.tagdiv.com/newspaper_pro/td-post-sneak-peak-best-smart-home-gadgets-features-of-2020/",
    category: "Gadgets",
    img: "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg.webp",
    date: "August 7, 2019",
    excerpt: "We woke reasonably late following the feast and free flowing wine the night before..."
  },
  {
    title: "Sneak Peak: Best Smart Home Gadgets & Features of 2020",
    link: "https://demo.tagdiv.com/newspaper_pro/td-post-sneak-peak-best-smart-home-gadgets-features-of-2020/",
    category: "Gadgets",
    img: "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/31-696x466.jpg.webp",
    date: "August 7, 2019",
    excerpt: "We woke reasonably late following the feast and free flowing wine the night before..."
  },
];

const GadgetsMenu = () => {
  const [getArticles, setArticles] = useState(articles); 
 

  return (
    <>
      {getArticles.map((article, index) => (
       <article className="   overflow-hidden mb-8 flex flex-col sm:flex-row" key={index}>
       <div className="p-6 sm:w-1.3/3  bg-white">
         <span className="text-blue-400 text-sm font-semibold">{article.category}</span>
         <h4 className=" font-bold mt-2 hover:text-blue-400"> <a href={article.link}>{article.title}</a> </h4>
         <p className="mt-4 text-gray-600 text-xs">{article.excerpt} </p>
         <span className="text-gray-500 text-xs mt-4 block">{article.date} </span>
       </div>
       <div className="sm:w-1.7/3 ml-3">
         <img src={article.img} alt="Smart home" className="w-full h-full object-cover" />
       </div>
     </article> 
      ))}
    </>
  );
};

export default GadgetsMenu;
