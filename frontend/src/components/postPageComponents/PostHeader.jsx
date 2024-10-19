import React, { useEffect, useState } from 'react'
import authorImg from '../../assets/authorImg.webp'
import { IoMdEye } from "react-icons/io";
import { PiChats } from "react-icons/pi";
import { BsFillShareFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import girls from '../../assets/girls1.jpg'

const PostHeader = () => {

    const [postData, setPostData] = useState('');

    useEffect(() => {
        fetch('./postData.json')
            .then((response) => response.json())
            .then((data) => setPostData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!postData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-2 w-full flex flex-col justify-center items-start bg-white'>
            <div className='w-16 h-6 bg-red-500 flex justify-center items-center'>
                <p className='text-sm text-center text-white font-semibold p-4'>Fashion</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h1 className='text-4xl font-semibold'>{postData.title}</h1>
                <div className='flex my-2 p-4 flex-col lg:flex-row justify-between items-center'>
                    <div className='flex flex-row justify-center items-center gap-x-2'>
                        <img src={authorImg} alt="authorImg" className='w-8 h-8 rounded-full' />
                        <span className='text-gray-400'>By</span>
                        <p className='text-black font-semibold'>{postData.author}</p>
                        <p>{postData.publishedDate}</p>
                    </div>
                    <div className='flex justify-center items-center gap-x-2'>
                        <span><IoMdEye /></span>
                        <p>{postData.views}</p>
                        <span><PiChats /></span>
                        <p>{postData.comments}</p>
                    </div>
                </div>
                <div className='flex gap-x-2'>
                    <div className='w-20 lg:w-52 h-12 border-2 border-dotted flex justify-evenly items-center'>
                        <p><BsFillShareFill /></p>
                        <p className="hidden lg:block md:font-medium">Share</p>
                    </div>
                    <div className='w-12 h-12 bg-blue-600 flex justify-center items-center rounded-md'>
                        <FaFacebookF size={20} color='white' />
                    </div>
                    <div className='w-12 h-12 bg-sky-600 flex justify-center items-center rounded-md'>
                        <BsTwitterX size={20} color='white' />
                    </div>
                    <div className='w-12 h-12 bg-red-600 flex justify-center items-center rounded-md'>
                        <FaPinterestP size={20} color='white' />
                    </div>
                    <div className='w-12 h-12 bg-green-600 flex justify-center items-center rounded-md'>
                        <FaWhatsapp size={20} color='white' />
                    </div>
                </div>
                <img src={girls} alt="girls" />
            </div>
        </div>
    )
}

export default PostHeader