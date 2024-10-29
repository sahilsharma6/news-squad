import React from 'react'
import author from '../assets/authorImg.webp'

const Comments = () => {
    return (
        <div className='w-full'>
            <div className="border-b mb-4 pb-2">
                <h2 className="text-white text-sm p-2 inline-block  bg-black">Recent Comment</h2>
            </div>
            <div className='w-full flex justify-content items-center gap-x-4'>
                <div className='w-16'>
                    <img src={author} alt="author" />
                </div>
                <div className='w-full flex flex-col justify-center items-start'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <h3 className='font-bold'>Armin Vans</h3>
                        <p className='text-sm text-gray-500'>August 14, 2019 At 5:47 am</p>
                    </div>
                    <div>
                        <p>Every outfit is carefully chosen by our designated fashion expert. Check them out!</p>
                    </div>
                </div>
            </div>
            <p className='my-8'>Comments are closed.</p>
        </div>
    )
}

export default Comments