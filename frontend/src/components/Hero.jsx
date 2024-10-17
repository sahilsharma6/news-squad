import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-auto my-12 gap-1 items-center justify-center w-[90%] sm:w-[80%] h-[415px] sm:h-[450px] overflow-hidden mx-auto">
        <div className="sm:overflow-hidden relative flex-1 w-full sm:w-[60%] h-[60%] sm:h-full group">
          <img
            className="w-full h-full object-cover transform transition duration-500 sm:group-hover:scale-110"
            src={img4}
            alt=""
          />
          <div className="absolute text-white z-10 bottom-3 sm:bottom-5 left-4 w-4/5 sm:w-[70%] ">
            <button className="bg-[#222222] px-3 text-xs py-1 transition-colors duration-300 group-hover:bg-blue-400">
              Fashion
            </button>
            <p className="text-sm sm:text-base md:text-lg ">
              WordPress News Magazine Charts the Most Chic and Fashionable Women
              of New York City USA
            </p>
            <p className="text-[10px]">August 7, 2019</p>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col flex-1 gap-1 h-full">
          <div className="overflow-hidden relative flex-1 group ">
            <img
              className="w-full h-full object-cover transform transition duration-500 sm:group-hover:scale-110"
              src={img2}
              alt=""
            />
            <div className="absolute text-white z-10  bottom-3 sm:bottom-5 left-2 sm:left-4 w-[90%] sm:w-[70%]">
                <button className="bg-[#222222] px-3 text-[8px] sm:text-xs py-1 transition-colors duration-300 group-hover:bg-blue-400">
                  Travel
                </button>
                <p className="text-xs sm:text-base">
                Discover the Most Magical Sunset in Santorini
                  
                </p>
              </div>
          </div>
          <div className="flex gap-1 flex-1">
            <div className="overflow-hidden relative flex-1 group">
              <img
                className="w-full h-full object-cover transform transition duration-500 sm:group-hover:scale-110"
                src={img3}
                alt=""
              />
              <div className="absolute text-white z-10  bottom-3 sm:bottom-5 left-2 sm:left-4 w-[90%] sm:w-[70%]">
                <button className="bg-[#222222] px-3 text-[8px] sm:text-xs py-1 transition-colors duration-300 group-hover:bg-blue-400">
                  Gadgets
                </button>
                <p className="text-xs">
                Game Changing Virtual Reality Console Hits the Market
                  
                </p>
              </div>
            </div>
            <div className="overflow-hidden relative hidden sm:block flex-1 group">
              <img
                className="w-full h-full object-cover transform transition duration-500 sm:group-hover:scale-110"
                src={img1}
                alt=""
              />
              <div className="absolute text-white z-10  bottom-3 sm:bottom-5 left-2 sm:left-4 w-[90%] sm:w-[70%]">
                <button className="bg-[#222222] px-3 text-[8px] sm:text-xs py-1 transition-colors duration-300 group-hover:bg-blue-400">
                  Reviews
                </button>
                <p className="text-xs">
                Computer Filters Noise to Make You a Better Listener
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
