import React from "react";
import img1 from "../assets/article1.jpg";

const Holiday = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-purple-500 inline-block p-2">
          Holiday Recipes
        </h2>
      </div>
      <h1 className="text-xl mb-4 text-start hover:text-purple-500">
        Everyone Should Travel for Their Favorite Foods 
        <br />
        <span className="text-sm">- Armin Vans - August 7, 2019</span>
      </h1>
      <img src={img1} alt="Holiday" className="mx-auto mb-4 h-48" />
      <p className="text-gray-700 hover:text-purple-500">
        We woke reasonably late following the feast and free-flowing wine the
        night before. After gathering ourselves and our packs, we headed down
        to...
      </p>
    </div>
  );
};

export default Holiday;
