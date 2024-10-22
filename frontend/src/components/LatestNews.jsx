import React from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "Fashion Outfit Ideas From the Biggest Instagram Influencers",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    category: "Vogue",
    author: "Armin Vans",
    date: "August 7, 2019",
    comments: 0,
  },
  {
    id: 2,
    title: "Style Spy: Fashion Model Goes Casual in Faux Furr and Plaid",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    category: "Vogue",
    author: "Armin Vans",
    date: "August 7, 2019",
    comments: 0,
  },
  {
    id: 3,
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    category: "Vogue",
    author: "Armin Vans",
    date: "August 7, 2019",
    comments: 0,
  },
  {
    id: 4,
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    category: "Vogue",
    author: "Armin Vans",
    date: "August 7, 2019",
    comments: 0,
  },
  {
    id: 5,
    title: "10 Fabulous Over-the-ankle Shoes to Wear This Cold Season",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    category: "Vogue",
    author: "Armin Vans",
    date: "August 7, 2019",
    comments: 0,
  },
  {
    id: 6,
    title: "What to Wear on Gala Night? We Asked the Biggest Names!",
    image:
      "https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/22-1024x684.jpg.webp",
    category: "Vogue",
    author: "Armin Vans",
    date: "August 7, 2019",
    comments: 0,
  },
];

const LatestNews = (props) => {
  return (
    <section className="mx-[10%] my-8">
      <div className="border-b-2 border-purple-700 mb-4">
        <h2 className="text-lg  bg-black text-white w-fit p-1 font-bold">
          LATEST NEWS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {newsData.map((newsItem) => (
          <Link key={newsItem.id} to={`/${newsItem.title}`}>
            <div key={newsItem.id} className="flex flex-col">
              <div className="relative">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-48 object-cover"
                />

                <span className="absolute bottom-0 left-0 bg-black text-white text-xs px-2 py-1 uppercase">
                  {newsItem.category}
                </span>
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-bold">{newsItem.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  {newsItem.author} - {newsItem.date}
                  <div className="flex  bg-black  justify-between  text-sm text-white px-1">
                    <span className="">{newsItem.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
