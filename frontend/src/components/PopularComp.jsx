import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import apiClient from '@/services/apiClient';

const Performan = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/posts');
        
        if (response.data && Array.isArray(response.data.posts)) {
          setData(response.data.posts.slice(0, 4)); 
        } else {
          setError("Data is not in expected format.");
        }
        setLoading(false);
      } catch (error) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const sortedData = Array.isArray(data) ? [...data].sort((a, b) => b.views - a.views) : [];

  return (
    <div className="container mx-auto p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm md:text-base p-2 inline-block bg-black text-center">Most Popular</h2>
      </div>

    
      <div className="space-y-4">
        {sortedData.map((article) => {
          const formattedDate = article.createdAt ? format(new Date(article.createdAt), 'MMMM dd, yyyy') : "No Date Available";
          
          
          const imageSrc = "http://localhost:5000" + article.image || 'https://via.placeholder.com/150';  

          return (
            <div
              key={article._id}
              className="flex items-start bg-white p-2"
              onClick={() => navigate(`/post/${article._id}`)} 
              style={{ cursor: 'pointer' }}
            >
              <img
                src={imageSrc}
                alt={article.title}
                className="w-1/4 h-16 object-cover mr-4"
              />
              <div className="w-3/4">
                <h2 className="text-xs md:text-sm mb-1 text-gray-800 font-semibold">{article.title}</h2>
                <p className="text-xs text-gray-500 mb-1">By {article.author} - {formattedDate}</p>
                <p className="text-xs text-gray-500">Views: {article.views}</p> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Performan;
