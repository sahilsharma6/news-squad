import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PostHeader from "../components/PostHeader";
import PostContent from "../components/PostContent";
import PostFooter from "../components/PostFooter";
import Performan from "@/components/PopularComp";
import Recentcomment from "@/components/RecentComp";
import Advertisement from "@/components/Advertisement";

const ArticlePage = () => {
  const { id } = useParams(); 
  const [postData, setPostData] = useState(null); 
  const [likes, setLikes] = useState(0);  
  const [likedByUser, setLikedByUser] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPostData(response.data);
        setLikes(response.data.likes);  

        const token = localStorage.getItem("token");
        if (token) {
          const likedResponse = await axios.get(`http://localhost:5000/api/posts/liked/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setLikedByUser(likedResponse.data.isLiked);  
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [id]);

  const handleLike = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setErrorMessage("Unauthorized. Please log in to like this post.");
        return;
      }

      const url = likedByUser 
        ? `http://localhost:5000/api/posts/dislike/${id}` 
        : `http://localhost:5000/api/posts/like/${id}`; 

      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.put(url, {}, { headers });

      if (response.status === 200) {
        if (likedByUser) {
          setLikes(prevLikes => prevLikes - 1);
        } else {
          setLikes(prevLikes => prevLikes + 1);
        }
        setLikedByUser(!likedByUser); 
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Unauthorized. Please log in to like this post.");
      } else {
        console.error("Error liking/disliking post:", error);
      }
    }
  };

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start">
      <div className="w-full p-2 lg:w-[70%] lg:ml-[10%] overflow-x-hidden">
        <PostHeader 
          title={postData.title} 
          introDescription={postData.introDescription} 
          publishDate={postData.createdAt} 
        />
        <PostContent content={postData.content} />
        
        {errorMessage && (
          <div className="text-red-500 mt-2">
            {errorMessage}
          </div>
        )}

        <PostFooter 
          likes={likes} 
          views={postData.views} 
          tags={postData.tags} 
          previousArticle={postData.previousArticle} 
          nextArticle={postData.nextArticle} 
          author={postData.userId[0].username} 
          authorLink={postData.authorLink} 
          authorDes={postData.authorDes} 
          handleLike={handleLike}
          isLiked={likedByUser}  
        />
      </div>
      
      <div className="w-full flex lg:w-[30%] lg:mr-[10%] flex-col justify-center items-center lg:sticky lg:top-0">
        <Advertisement /> 
        <Performan /> 
        <Recentcomment /> 
      </div>
    </div>
  );
};

export default ArticlePage;
