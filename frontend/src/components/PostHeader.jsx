import React from 'react';
import authorImg from '../assets/authorImg.webp';
import { IoMdEye } from "react-icons/io";
import { PiChats } from "react-icons/pi";
import { BsFillShareFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import girls from '../assets/girls1.jpg';

const PostHeader = ({ title, introDescription }) => {

    return (
        <div className='p-2 w-full flex flex-col justify-center items-start bg-white'>
            <div className='w-20 h-10 text-white bg-blue-500 flex justify-center items-center'>
                <p className='text-lg text-center text-white font-semibold p-6'>Fashion</p>
            </div>
            <div className='w-full flex flex-col gap-y-4 mt-4'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p className='text-sm text-gray-500'>{introDescription}</p>
           
            </div>
        </div>
    );
};

export default PostHeader;
