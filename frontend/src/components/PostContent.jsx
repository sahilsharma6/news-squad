import React from 'react';
import girls from '../assets/girls1.jpg';
import boy from '../assets/boy1.jpg';

const PostContent = ({ content }) => {
    if (!content) {
        return <div>No content available</div>;
    }

    return (
        <div className='p-2 w-full flex flex-col gap-y-6 justify-center items-start bg-white'>
            <div className='flex flex-col gap-y-6'>
                <p>{content.des1}</p>
                <p className='font-medium'>{content.des2}</p>
                <p>{content.des3}</p>
            </div>
            <img src={girls} alt="girls" />
            <p className='text-md text-gray-400'>Adderall and flirting with bulimia in an attempt to whittle herself</p>
            <p>{content.des4}</p>
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 flex flex-col gap-y-6 lg:px-8 text-md'>
                    <p>{content.des5}</p>
                    <p>{content.des6}</p>
                    <p>{content.des7}</p>
                </div>
                <div className='w-full lg:w-60'>
                    <img src={boy} alt="boy" />
                    <p className='text-gray-500 text-md'>City Guide for Vienna</p>
                </div>
            </div>
            <div>
                <p>{content.des8}</p>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-4xl text-sky-400 text-center italic'>{content.heading}</h1>
                <p>{content.des9}</p>
            </div>
        </div>
    );
};

export default PostContent;
