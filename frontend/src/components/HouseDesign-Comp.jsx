import React from 'react';

const HouseDesignSection = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section Title */}
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm p-2 inline-block  bg-gray-500">HOUSE DESIGN</h2>
      </div>
      <div className="pt-2">
            <hr className=" border-black pt-2" />
          </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article 1 */}
        <div>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Monochrome Home"
            className="w-full h-40 object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1">Architecture</span>
            <h3 className="mt-2 text-sm ">
              Modern Monochrome Home with Calm and Cosy Terrace and Steps
            </h3>
          </div>
        </div>

        {/* Article 2 */}
        <div>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Scandinavian Boho"
            className="w-full h-40 object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1">Architecture</span>
            <h3 className="mt-2 text-sm ">
              Scandinavian Boho Three-bed Decorated with Neutral Tones
            </h3>
          </div>
        </div>

        {/* Article 3 */}
        <div>
          <img
            src="https://via.placeholder.com/300x200"
            alt="Four-Bedroom House"
            className="w-full h-40 object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1">Architecture</span>
            <h3 className="mt-2 text-sm ">
              Luxurious Four-Bedroom House with Roman Stone Bath House
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDesignSection;
