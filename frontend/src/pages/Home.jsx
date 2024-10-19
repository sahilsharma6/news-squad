import React from "react";
import Hero from "../components/Hero";
import NewsLayout from "../components/DontMiss-Comp";
import RightSidebar from "../components/Connect-comp";
import NewsLayout2 from "../components/LifeStyle-Comp";
import ModernSection from "../components/Modern-Comp";
import HouseDesignSection from "../components/HouseDesign-Comp";
import Perform from "../components/Perform-Comp";
import Latest from "../components/Article.Comp";
import Performan from "../components/Popular-Comp";
import Recentcomment from "../components/Recent-Comp";
import Holiday from "@/components/Holiday-Comp";
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
        <Holiday/>
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

