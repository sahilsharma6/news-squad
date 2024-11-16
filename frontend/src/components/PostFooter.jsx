import React from 'react';
import authorImg from '../assets/authorImg.webp';
import { BsFillShareFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';

const PostFooter = ({ likes, views, tags, previousArticle, nextArticle, author, authorLink, authorDes }) => {
  return (
    <div className='p-2 w-full flex flex-col gap-6 justify-center items-start bg-white'>
      <div className='w-full flex gap-x-2 border-y-2 border-dotted p-8'>
        <div className='w-20 lg:w-52 h-12 border-2 border-dotted flex justify-evenly items-center'>
          <p><BsFillShareFill /></p>
          <p className='hidden lg:block md:font-medium'>Share</p>
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
      <div className='w-full flex justify-between items-center'>
        <div className='flex flex-col gap-y-2'>
          <p className='text-gray-400 text-md'>Previous article</p>
          <p>{previousArticle}</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <p className='text-right text-md text-gray-400'>Next Article</p>
          <p>{nextArticle}</p>
        </div>
      </div>
      <div className='w-full flex flex-col lg:flex-row lg:gap-x-2 p-4 border-2 border-dotted'>
        <div className='w-full lg:w-1/2 flex justify-center items-start'>
          <img src={authorImg} alt="author" />
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start gap-y-2'> 
          <p className='font-medium'>{author}</p>
          <Link to={authorLink || "#"}>
            <p className='text-sm text-gray-400'>{authorLink || "http://www.tagdiv.com"}</p>
          </Link>
          <p className='text-md'>{authorDes}</p>
          <div className='flex gap-x-4'>
            <FaFacebookF />
            <FiInstagram />
            <BsTwitterX />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      {/* Likes, views, and tags section */}
      <div className='flex gap-4 mt-4'>
        <p>Likes: {likes}</p>
        <p>Views: {views}</p>
        <p>Tags: {tags?.join(', ')}</p>
      </div>
    </div>
  )
}

export default PostFooter;
