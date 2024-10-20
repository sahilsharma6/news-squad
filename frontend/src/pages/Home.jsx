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
      <div className="md:mx-[10%] block">
        <Hero />

        {/* First Section */}
        <div className="flex flex-col md:flex-row w-full pt-5">
          <div className="w-full md:w-[70%]">
            <NewsLayout />
          </div>
          <div className="w-full md:w-[30%] hidden md:block">
            <RightSidebar />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row w-full pt-5">
          <div className="w-full md:w-[70%]">
            <NewsLayout2 />
          </div>
          <div className="w-full md:w-[30%] hidden md:block">
            <ModernSection />
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row w-full pt-5">
          <div className="w-full md:w-[70%]">
            <HouseDesignSection />
          </div>
          <div className="w-full md:w-[30%] hidden md:block"></div>
        </div>

        {/* Mobile Sidebar */}
        <div className="w-full md:hidden">
          <RightSidebar />
        </div>
        <div className="w-full md:hidden">
          <ModernSection />
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col md:flex-row w-full pt-5">
          <div className="w-full md:w-[70%]">
            <Perform />
          </div>
          <div className="w-full md:w-[30%] hidden md:block">
            <Holiday />
          </div>
        </div>
        <div className="w-full md:hidden">
          <Holiday />
        </div>

        {/* Fifth Section */}
        <div className="flex flex-col md:flex-row w-full pt-5">
          <div className="w-full md:w-[70%]">
            <Latest />
          </div>
          <div className="w-full md:w-[30%] hidden md:block">
            <Performan />
            <Recentcomment />
          </div>
        </div>
        <div className="w-full md:hidden">
          <Performan />
          <Recentcomment />
        </div>
      </div>
    </>
  );
};

export default Home;

