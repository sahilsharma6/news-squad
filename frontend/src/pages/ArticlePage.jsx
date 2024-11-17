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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPostData(response.data); 
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };
    fetchPost();
  }, [id]);

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
        <PostFooter 
          likes={postData.likes} 
          views={postData.views} 
          tags={postData.tags} 
          previousArticle={postData.previousArticle} 
          nextArticle={postData.nextArticle} 
          author={postData.author} 
          authorLink={postData.authorLink} 
          authorDes={postData.authorDes} 
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
