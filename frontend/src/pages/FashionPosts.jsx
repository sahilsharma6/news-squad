import React from "react";
import LatestNews from "@/components/LatestNews";
import { Link } from "react-router-dom";
import ModernSection from "@/components/ModernComp";

const FashionPosts = () => {
  return (
    <>
      {/* top */}

      <div
        className="relative w-full h-[450px] bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/38.jpg)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex items-center mx-[5%] md:mx-[10%] justify-left h-full">
          <div className="text-center flex justify-start items-start flex-col text-white space-y-2">
            <h1 className="text-2xl font-bold">FASHION</h1>

            <div className="space-x-1 md:space-x-4 flex items-start flex-col ">
              <div className="space-y-2 md:space-y-0 md:space-x-1 flex flex-col md:flex-row">
                <Link
                  to="new-look"
                  className="bg-red-500 max-w-fit text-sm text-white px-4 rounded-full uppercase"
                >
                  New Look
                </Link>
                <Link
                  to="street-fashion"
                  className="bg-orange-500 max-w-fit text-sm text-white px-4 rounded-full uppercase"
                >
                  Street Fashion
                </Link>
                <Link
                  to="style-hunter"
                  className="bg-pink-500 max-w-fit text-sm text-white px-4 rounded-full uppercase"
                >
                  Style Hunter
                </Link>
                <Link
                  to="vogue"
                  className="bg-purple-500 max-w-fit text-sm text-white px-4 rounded-full uppercase"
                >
                  Vogue
                </Link>
              </div>
              <p className="text-lg italic max-w-3xl text-left ml-0 mt-4 md:mt-0">
                Custom category description. You must learn one thing. The world
                was made to be free in. Give up all the other worlds except the
                one in which you belong.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-[5%] md:mx-[10%]">
        <div className="w-[70%]">
          {" "}
          <LatestNews />
        </div>
        <div className="w-[30%]">
          <ModernSection/>

        </div>
      </div>
    </>
  );
};

export default FashionPosts;
