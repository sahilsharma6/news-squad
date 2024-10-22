import React from 'react'
import img2 from "../assets/blog-1.jpg";


const Advertisement = () => {
  return (
    <div>
         <div className="mb-8">
        <h2 className="text-gray-500 text-center text-sm">- Advertisement -</h2>
        <div className="flex justify-center mt-4">
          {/* Replace this img src with your image path */}
          <img
            src={img2}
            alt="Advertisement"
            className="w-full h-auto max-w-[300px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Advertisement