import React, { useEffect, useState } from 'react'
import girls from '../../assets/girls1.jpg'
import boy from '../../assets/boy1.jpg'

const PostContent = () => {

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
        <div className='p-2 w-full flex flex-col gap-y-6 justify-center items-start bg-white'>
            <div className='flex flex-col gap-y-6'>
                <p>{postData.des1}</p>
                <p className='font-medium'>{postData.des2}</p>
                <p>{postData.des3}</p>
            </div>
            <img src={girls} alt="girls" />
            <p className='text-md text-gray-400'>Adderall and flirting with bulimia in an attempt to whittle herself</p>
            <p>{postData.des4}</p>
            <div className='w-full flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/2 flex flex-col gap-y-6 lg:px-8 text-md'>
                    <p>{postData.des5}</p>
                    <p>{postData.des6}</p>
                    <p>{postData.des7}</p>
                </div>
                <div className='w-full lg:w-60'>
                    <img src={boy} alt="boy" />
                    <p className='text-gray-500 text-md'>City Guide for Vienna</p>
                </div>
            </div>
            <div>
                <p>{postData.des8}</p>
            </div>
            <div className='flex flex-col gap-y-6'>
                <h1 className='text-4xl text-sky-400 text-center italic'>{postData.heading}</h1>
                <p>{postData.des9}</p>
            </div>
        </div >
    )
}

export default PostContent