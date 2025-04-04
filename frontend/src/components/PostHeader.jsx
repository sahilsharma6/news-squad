import React from 'react';

import { FaCalendarAlt } from 'react-icons/fa';

const PostHeader = ({ title, introDescription, publishDate,category}) => {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className='p-2 w-full flex flex-col justify-center items-start bg-white '>
      <div className='w-fit h-10 text-white from-purple-600 to-blue-500 bg-gradient-to-r flex justify-center items-center'>
        <p className='text-lg text-center text-white w-fit font-bold p-6'>{category}</p>
      </div>
      <div className='w-full flex flex-col gap-y-4 mt-4 '>
        <h1 className='text-4xl font-semibold'>{title}</h1>
        <div className='flex items-center gap-2 text-sm text-gray-500 pb-2 border-b-2'>
          <FaCalendarAlt className='text-gray-500' />
          <p>{formattedDate}</p>
        </div>
        <p className='text-sm text-gray-500'>{introDescription}</p>
      </div>
    </div>
  );
};

export default PostHeader;
