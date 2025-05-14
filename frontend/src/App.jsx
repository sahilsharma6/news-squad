// App.jsx
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import apiClient from "./services/apiClient";


const App = () => {
  const [postForSeo,setPostForSeo]=useState({})
  const location = useLocation();
  const path = location.pathname;
console.log(location.pathname);
const getTitle=location.pathname.split('/')
  // Use the exact match or fallback
  console.log(getTitle[2]);
  useEffect(()=>{
   async function getPostData(){
    const res=await apiClient.get('/posts/post/'+getTitle[2])
    console.log(res.data);
    setPostForSeo(res.data)
   } 
   getPostData()
  },[getTitle[2]])
  const seo = postForSeo

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.introDescription} />
        <meta name="keywords" content="blog, articles, fashion, gadgets, lifestyle" />
        <meta name="author" content="My Blog Team" />
      </Helmet>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
