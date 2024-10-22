import React from 'react'
// import heroBG from "../assets/article1.jpg";
import PostHeader from '../components/PostHeader'
import PostContent from '../components/PostContent'
import PostFooter from '../components/PostFooter'
import Performan from '@/components/PopularComp'
import Recentcomment from '@/components/RecentComp'
import Advertisement from '@/components/Advertisement'
import Comments from '@/components/Comments'

const ArticlePage = () => {
    return (
        <>
            {/* <div>
                <div className="relative bg-black bg-opacity-100 ">
                    <div className="">
                        <img src={heroBG} alt="" className=" h-full w-full object-cover opacity-40 -z-10" />
                    </div>
                    <div className="absolute w-4/5 top-1/2  text-white left-1/2 -translate-x-1/2 -translate-y-1/2  z-10">
                        <h4 className="text-center uppercase py-4  lg:text-xl">Interiors</h4>
                        <h1 className="text-center leading-10 text-white text-xl lg:text-5xl uppercase font-bold ">
                            Another Big Apartment Project Slated for Broad Ripple Company</h1>
                        <div className="flex w-1/2 font-bold text-sm m-auto justify-center uppercase list-none gap-3 py-4">
                            <li className='px-6 py-2 ' >August 7, 2019</li>
                            <li className='px-6 py-2 border-x border-x-white' >comments 1</li>
                            <li className='px-6 py-2 ' >armin vans</li></div>
                    </div>
                </div>
            </div> */}
            <div className='flex flex-col lg:flex-row justify-center items-start'>
                <div className='w-full p-2 lg:w-[70%] lg:ml-[10%] overflow-x-hidden'>
                    <PostHeader />
                    <PostContent />
                    <PostFooter />
                    <Comments />
                </div>
                <div className='w-full flex lg:w-[40%] lg:mr-[10%] flex-col justify-center items-center lg:sticky lg:top-0'>
                    <Advertisement />
                    <Performan />
                    <Recentcomment />
                </div>
            </div>
        </>
    )
}

export default ArticlePage