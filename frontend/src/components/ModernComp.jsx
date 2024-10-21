import React from 'react';

// Sample data for modern articles
const modernArticles = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Urban Kitchen",
    title: "Urban Kitchen with Granite Tops, Exposed Bulb Lights and Island",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Modern Bathroom",
    title: "Modern Bathroom with Metro Rocks, Large Plant and Neutral Tiles",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Luxe Hallway",
    title: "Luxe Hallway with Chess Table Flooring and Large Rounded Windows",
  },
  {
    id: 4,
    imgSrc: "https://via.placeholder.com/300x200",
    altText: "Lighthouse Paint Job",
    title: "Man Agrees to Complete $50,000 Hereford Lighthouse Paint Job",
  },
];

const ModernSection = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section Title */}
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">MAKE IT MODERN</h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 gap-6">
        {modernArticles.map((article) => (
          <div key={article.id} className="flex flex-col relative">
          {/* Make it Modern label */}
          <div className="relative">
            <span style={{ fontSize: '10px' }} className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 hover:bg-blue-500 rounded-sm">
              Make it Modern
            </span>
            <img
              src={article.imgSrc}
              alt={article.altText}
              className="w-full h-auto object-cover"
            />
          </div>
        
            <div className="mt-2">
              <h3 className="mt-2 text-sm hover:text-blue-500">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernSection;
