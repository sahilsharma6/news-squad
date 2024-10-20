import React from 'react';

const ModernSection = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section Title */}
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">MAKE IT MODERN</h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Article 1 */}
        <div className="flex flex-col">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Urban Kitchen"
            className="w-full h-auto object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1 hover:bg-blue-500">Make it Modern</span>
            <h3 className="mt-2 text-sm hover:text-blue-500">Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island</h3>
          </div>
        </div>

        {/* Article 2 */}
        <div className="flex flex-col">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Modern Bathroom"
            className="w-full h-auto object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1 hover:bg-blue-500">Make it Modern</span>
            <h3 className="mt-2 text-sm hover:text-blue-500">Modern Bathroom with Metro Rocks, Large Plant and Neutral Tiles</h3>
          </div>
        </div>

        {/* Article 3 */}
        <div className="flex flex-col">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Luxe Hallway"
            className="w-full h-auto object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1 hover:bg-blue-500">Make it Modern</span>
            <h3 className="mt-2 text-sm hover:text-blue-500">Luxe Hallway with Chess Table Flooring and Large Rounded Windows</h3>
          </div>
        </div>

        {/* Article 4 */}
        <div className="flex flex-col">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Lighthouse Paint Job"
            className="w-full h-auto object-cover"
          />
          <div className="mt-2">
            <span className="text-sm bg-black text-white px-2 py-1 hover:bg-blue-500">Make it Modern</span>
            <h3 className="mt-2 text-sm hover:text-blue-500">Man Agrees to Complete $50,000 Hereford Lighthouse Paint Job</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernSection;

