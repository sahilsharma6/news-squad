import React, { useEffect, useState } from 'react'
import authorImg from '../../assets/authorImg.webp'
import { BsFillShareFill, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';

const PostFooter = () => {

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
    <div className='m-4 p-2 w-1/2 flex flex-col gap-6 justify-center items-start bg-white'>
      <div className='w-full flex gap-x-2 border-y-2 border-dotted p-8'>
        <div className='w-52 h-12 border-2 border-dotted flex justify-evenly items-center'>
          <p><BsFillShareFill /></p>
          <p className='font-medium'>Share</p>
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
          <p>{postData.previousArticle}</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <p className='text-right text-md text-gray-400'>Next Article</p>
          <p>{postData.nextArticle}</p>
        </div>
      </div>
      <div className='w-full flex gap-x-2 p-4 border-2 border-dotted'>
        <div className='w-1/2 flex justify-center items-start'>
          <img src={authorImg} alt="authorImg" />
        </div>
        <div className='flex flex-col gap-y-2'> 
          <p className='font-medium'>{postData.author}</p>
          <Link to="http://www.tagdiv.com">
              <p className='text-sm text-gray-400'>http://www.tagdiv.com</p>
          </Link>
          <p className='text-md'>{postData.authorDes}</p>
          <div className='flex gap-x-4'>
            <FaFacebookF />
            <FiInstagram />
            <BsTwitterX />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostFooter