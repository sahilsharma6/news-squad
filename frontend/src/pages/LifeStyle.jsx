import RightSidebar from '@/components/ConnectComp'
import ArticleList from '@/components/LifeArt'
import LifestyleSection from '@/components/Lifecomp'
import Mustread from '@/components/MustRead'
import React from 'react'

const LifeStyle = () => {
  return (
      <div className="">
        <LifestyleSection/>
    <div className='md:mx-[10%] px-4 md:px-0'>
      <div className="flex flex-col md:flex-row w-full pt-5 gap-5 ">
        <div className="w-full md:w-[70%] space-y-5">
          <ArticleList/>
        </div>
        <div className="w-full md:w-[30%] hidden md:flex flex-col ">
          <RightSidebar/>
          <Mustread/>
        </div>
      </div>
      <div className="w-full md:hidden pt-5">
      <RightSidebar/>
      <Mustread/>
      </div>
      </div>
      </div>
  )
}

export default LifeStyle
