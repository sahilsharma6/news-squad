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
            <div className='w-16 h-6 bg-red-500 flex justify-center items-center'>
                <p className='text-sm text-center text-white font-semibold p-4'>Fashion</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h1 className='text-4xl font-semibold'>{title}</h1>
                <p>{introDescription}</p>
                {/* Additional elements like author info, icons, and images */}
            </div>
        </div>
    );
};

export default PostHeader;
