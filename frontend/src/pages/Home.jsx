import React from "react";
import Hero from "../components/Hero";
import NewsLayout from "../components/content1";
import RightSidebar from "../components/Connect";
import NewsLayout2 from "../components/content2";
import ModernSection from "../components/content3";
import HouseDesignSection from "../components/content4";
import Perform from "../components/content5";
import Latest from "../components/content6";
import Performan from "../components/content7";
import Recentcomment from "../components/content8";
const Home = () => {
  return (
    <>
      <div className="mx-[10%]">
        <Hero />
        <div className="flex w-full pt-5 pl-2">
          <div className="w-[70%]">
            <NewsLayout />
          </div>
          <div className="w-[30%]">
            <RightSidebar />
          </div>
        </div>
        <div className="flex w-full pt-5 pl-2">
        <div className="w-[70%]">
        <NewsLayout2/>
        </div>
        <div className="w-[30%]">
          <ModernSection/>
        </div>
        </div>
        <div className="flex w-full pt-5 pl-2">
        <div className="w-[70%]">
        <HouseDesignSection/>
        </div>
        <div className="w-[30%]">
          
        </div>
        </div>
        <div className="flex w-full pt-5 pl-2">
        <div className="w-[70%]">
        <Perform/>
        </div>
        <div className="w-[30%]">
          
        </div>
        </div>
        <div className="flex w-full pt-5 pl-2">
        <div className="w-[70%]">
        <Latest/>
        </div>
        <div className="w-[30%]">
        <Performan/>
        <Recentcomment/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;

