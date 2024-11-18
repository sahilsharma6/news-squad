import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ModernSection = () => {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts/category/MakeitModern");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        } else {
          setError("No posts available for this category.");
        }
      } catch (error) {
       
        setError("Failed to load posts. Please try again later."); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPosts();
  }, []);


  if (loading) {
    return <p className="text-center text-xl text-gray-700">Loading posts...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-600">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="border-b mb-4 pb-2">
        <h2 className="text-white text-sm bg-black inline-block p-2">MAKE IT MODERN</h2>
      </div>

      {/* Display posts if available */}
      {posts.length === 0 ? (
        <p className="text-center text-xl text-gray-700">No posts found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
          {posts.map((article) => (
            <div
              key={article._id}
              className="flex flex-col relative"
              onClick={() => navigate(`/post/${article._id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative">
                <span style={{ fontSize: '10px' }} className="absolute bottom-0 left-0 text-xs bg-black text-white px-2 py-1 hover:bg-blue-500 rounded-sm">
                  Make it Modern
                </span>
                <img
                  src={article.imgSrc || 'default-image.jpg'}
                  alt={article.altText || article.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="mt-2">
                <h3 className="mt-2 text-sm hover:text-blue-500">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernSection;
