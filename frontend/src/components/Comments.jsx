import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div className='w-full'>
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm p-2 inline-block bg-black">Recent Comment</h2>
      </div>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className='w-full flex justify-content items-center gap-x-4 mb-4'>
            <div className='w-16'>
              <img src={comment.authorImg || 'defaultImagePath'} alt="author" />
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
              <div className='flex justify-center items-center gap-x-2'>
                <h3 className='font-bold'>{comment.author}</h3>
                <p className='text-sm text-gray-500'>{comment.date}</p>
              </div>
              <div>
                <p>{comment.text}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}
      <p className='my-8'>Comments are closed.</p>
    </div>
  );
};

export default Comments;
