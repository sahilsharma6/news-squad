import React from "react";
import Hero from "../components/Hero";
import NewsLayout from "../components/content1";
import RightSidebar from "../components/Connect";

const Home = () => {
  return (
    <>
      <div className="mx-[10%]">
        <Hero />
        <div className="flex w-full">
          <div className="w-[70%]">
            <NewsLayout />
          </div>
          <div className="w-[30%]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

