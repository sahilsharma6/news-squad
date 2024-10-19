import React from 'react';
import img1 from '../assets/img1.jpg'
const NewsLayout2 = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Top Navigation */}
      <div className="flex justify-between items-center border-b pb-3 mb-6">
        <h1 className="text-sm  text-white bg-green-800 p-2">LIFESTYLE NEWS</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-green-600">All</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Travel</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Recipes</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Health & Fitness</a>
          <a href="#" className="text-gray-600 hover:text-green-600">Music</a>
        </nav>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Article 1 */}
  <div className="flex flex-col">
    <img
      src={img1} // Slightly smaller size
      alt="Article 1"
      className="w-full h-48 object-cover"
    />
    <div className="mt-4">
      <span className="text-sm bg-black text-white px-2 py-1 inline-block mb-2 hover:bg-green-600">Architecture</span>
      <h2 className="mt-2 text-xl font-semibold hover:text-green-600">Now Is the Time to Think About Your Small-Business Success</h2>
      <p className="text-sm text-gray-600">Armin Vans - June 19, 2019</p>
      <p className="mt-2 text-gray-700">
        We woke reasonably late following the feast and free-flowing wine the night before...
      </p>
    </div>
  </div>

  {/* Article 2 */}
  <div className="flex flex-col">
    <img
      src="https://via.placeholder.com/500x300" // Slightly smaller size
      alt="Article 2"
      className="w-full h-48 object-cover"
    />
    <div className="mt-4">
      <span className="text-sm bg-black text-white px-2 py-1 inline-block mb-2  hover:bg-green-600">Architecture</span>
      <h2 className="mt-2 text-xl font-semibold hover:text-green-600">Radio Air Time Marketing: A New Strategy for the Economy</h2>
      <p className="text-sm text-gray-600">Armin Vans - June 19, 2019</p>
      <p className="mt-2 text-gray-700">
        We woke reasonably late following the feast and free-flowing wine the night before...
      </p>
    </div>
  </div>
</div>


      {/* Bottom Grid */}
      <div>
      <div className='flex'>
      <div className="grid grid-cols-1 gap-6 mt-6">
  {/* Related Article 1 */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/100x100"
      alt="Related 1"
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <h3 className="text-sm hover:text-green-600">Best Things You Can Do on a Solo Mountain Climb</h3>
      <p className="text-xs text-gray-600">August 7, 2019</p>
    </div>
  </div>

  {/* Related Article 2 */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/100x100"
      alt="Related 2"
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <h3 className="text-sm hover:text-green-600">Creative Decorating with Houseplants, from Floor to Ceiling</h3>
      <p className="text-xs text-gray-600">August 7, 2019</p>
    </div>
  </div>

  {/* Related Article 3 */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/100x100"
      alt="Related 3"
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <h3 className="text-sm hover:text-green-600">How to Burn Calories with Pleasant Activities</h3>
      <p className="text-xs text-gray-600">August 7, 2019</p>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 gap-6 mt-6">
  {/* Related Article 1 */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/100x100"
      alt="Related 1"
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <h3 className="text-sm hover:text-green-600">Best Things You Can Do on a Solo Mountain Climb</h3>
      <p className="text-xs text-gray-600">August 7, 2019</p>
    </div>
  </div>

  {/* Related Article 2 */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/100x100"
      alt="Related 2"
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <h3 className="text-sm hover:text-green-600">Creative Decorating with Houseplants, from Floor to Ceiling</h3>
      <p className="text-xs text-gray-600">August 7, 2019</p>
    </div>
  </div>

  {/* Related Article 3 */}
  <div className="flex items-center">
    <img
      src="https://via.placeholder.com/100x100"
      alt="Related 3"
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <h3 className="text-sm hover:text-green-600">How to Burn Calories with Pleasant Activities</h3>
      <p className="text-xs text-gray-600">August 7, 2019</p>
    </div>
  </div>
</div>
</div>

</div>

    </div>
  );
};

export default NewsLayout2;
