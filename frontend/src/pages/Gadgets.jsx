import React, { useState } from 'react';
import GadgetsMenu from '../components/GadgetsMenu';

const Gadgets = () => {

  const recentArticles = [
    { title: "Another Big Apartment Project Slated for Broad Ripple Company", category: "INTERIORS", date: "AUGUST 7, 2019" },
    { title: "Patricia Urquiola Coats Transparent Glas Tables for Livings", category: "INTERIORS", date: "AUGUST 7, 2019" },
    { title: "Ambrose Seeks Offers on Downtown Building for Apartments", category: "INTERIORS", date: "AUGUST 7, 2019" },
    { title: "Taina Blue Retreat is a Converted Tower on the Greek Coast", category: "INTERIORS", date: "AUGUST 7, 2019" },
  ];
  const [getRecentArticles,setRecentArticles]=useState(recentArticles)
  const products=["GADGETS", "MOBILE PHONES", "PHOTOGRAPHY", "REVIEWS"];
  const [getProducts,setProducts]=useState(products);
  return (
    <div className=" min-h-screen bg-white-100">
    <header className="bg-white ">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold">Gadgets</h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            {getProducts.map((item) => (
              
              <li key={item} className='text-xs'>
                <a href="#" className=" text-blue-400 hover:text-black">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>

    <main className="container mx-5  py-4 bg-white-800">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-2/3">
        <GadgetsMenu />
          {/* <article className="   overflow-hidden mb-8 flex flex-col sm:flex-row">
            <div className="p-6 sm:w-2/3 border bg-white">
              <span className="text-blue-600 text-sm font-semibold">GADGETS</span>
              <h2 className="text-2xl font-bold mt-2">Sneak Peak: Best Smart Home Gadgets & Features of 2020</h2>
              <p className="mt-4 text-gray-600">We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family's small dining...</p>
              <span className="text-gray-500 text-sm mt-4 block">AUGUST 7, 2019</span>
            </div>
            <div className="sm:w-1/3 ml-3">
              <img src="https://images.pexels.com/photos/28740058/pexels-photo-28740058/free-photo-of-vintage-bicycle-and-rustic-door-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Smart home" className="w-full h-full object-cover" />
            </div>
          </article> */}

          {/* <article className="bg-white shadow rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <div className="p-6 sm:w-2/3">
              <span className="text-blue-600 text-sm font-semibold">GADGETS</span>
              <h2 className="text-2xl font-bold mt-2">New Action Game Refreshed With a Premium Hi-Fi Sound</h2>
              <p className="mt-4 text-gray-600">We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay...</p>
              <span className="text-gray-500 text-sm mt-4 block">AUGUST 7, 2019</span>
            </div>
            <div className="sm:w-1/3">
              <img src="/api/placeholder/400/300" alt="Action game" className="w-full h-full object-cover" />
            </div>
          </article> */}
        </div>

        <aside className="lg:w-1/3">
          <div className="bg-white  ml-2">
            <h3 className="text-xl font-bold mb-4">Recent Articles</h3>
            <ul className="space-y-4">
              {getRecentArticles.map((article, index) => (
                <li key={index}>
                  <a href="#" className="block hover:text-blue-800 p-2 ">
                    <h4 className="font-bold">{article.title}</h4>
                    <span className="text-blue-600 text-xs">{article.category}</span>
                    <span className="text-gray-500 text-xs ml-2">{article.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  </div>
  );
}

export default Gadgets;
