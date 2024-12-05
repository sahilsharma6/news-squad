
import Hero from "../components/Hero";
import NewsLayout from "../components/DontMissComp";
import RightSidebar from "../components/ConnectComp";
import NewsLayout2 from "../components/LifeStyleComp";
import ModernSection from "../components/ModernComp";
import HouseDesignSection from "../components/HouseDesignComp";
import Perform from "../components/PerformanceComp";
import Latest from "../components/Article.Comp";
import Performan from "../components/PopularComp";
import Recentcomment from "../components/RecentComp";
import Holiday from "@/components/HolidayComp";

const Home = () => {
  return (
    <div className="md:mx-[10%] px-4 md:px-0">
      <Hero />

      {/* First Section */}
      <div className="flex flex-col md:flex-row w-full pt-5 gap-5">
        <div className="w-full md:w-[70%] space-y-5">
          <NewsLayout />
        </div>
        <div className="w-full md:w-[30%] hidden md:flex flex-col gap-5 sticky top-5">
          <RightSidebar />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row w-full pt-5">
        <div className="w-full md:w-[70%]">
          <NewsLayout2 />
        </div>
        <div className="w-full md:w-[30%] hidden md:block sticky top-5">
          <ModernSection />
        </div>
      </div>

      {/* Third Section */}
      {/* <div className="flex flex-col md:flex-row w-full pt-5 gap-5">
        <div className="w-full md:w-[70%]">
          <HouseDesignSection />
        </div>
        <div className="w-full md:w-[30%] hidden md:block sticky top-5"></div>
      </div> */}

      {/* Mobile Sidebar */}
      <div className="w-full md:hidden space-y-5 pt-5">
        <RightSidebar />
        <ModernSection />
      </div>

      {/* Fourth Section */}
      <div className="flex  max-w-screen flex-col md:flex-row w-full pt-5 gap-5">
        {/* <div className="w-full md:w-[70%]">
          <Perform />
        </div> */}
        <div className="  sticky top-5">
          <Holiday />
        </div>
      </div>


      {/* Fifth Section */}
      <div className="flex flex-col md:flex-row w-full pt-5 gap-5">
        <div className="w-full md:w-[70%]">
          <Latest />
        </div>
        <div className="w-full md:w-[30%]  md:flex flex-col gap-5 sticky top-5">
          <Performan />
          <Recentcomment />
        </div>
      </div>

      
    </div>
  );
};

export default Home;
