// App.jsx
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";
import Header from "./components/Header";

const seoMap = {
  "/": {
    title: "Home ",
    description: "Welcome to My Blog – read the latest on fashion, lifestyle, and gadgets.",
  },
  "/signin": {
    title: "Sign In ",
    description: "Access your My Blog account.",
  },
  "/register": {
    title: "Register ",
    description: "Create your free My Blog account and start exploring articles.",
  },
  "/profile": {
    title: "Your Profile ",
    description: "Manage your user profile on My Blog.",
  },
  "/category/fashion": {
    title: "Fashion ",
    description: "Explore the latest trends, tips, and fashion guides.",
  },
  "/category/lifestyle": {
    title: "Lifestyle ",
    description: "Lifestyle hacks, tips, and motivation for modern living.",
  },
  "/category/gadgets": {
    title: "Gadgets ",
    description: "Reviews and updates on the latest tech and gadgets.",
  },
  "/category/mobile-phones": {
    title: "Mobile Phones",
    description: "Stay up to date with mobile news, reviews, and tips.",
  },
  "/category/photography": {
    title: "Photography ",
    description: "Discover photography tips, camera gear reviews and inspiration.",
  },
  "/category/reviews": {
    title: "Reviews ",
    description: "Product reviews and honest opinions to help you choose wisely.",
  },
  "/dashboard": {
    title: "Dashboard ",
    description: "Admin dashboard to manage posts, users, and categories.",
  },
  "/policy": {
    title: "Privacy Policy ",
    description: "Read our privacy policy.",
  },
  "/terms": {
    title: "Terms & Conditions ",
    description: "View the terms and conditions for using My Blog.",
  },
  "/disclaimer": {
    title: "Disclaimer ",
    description: "Legal disclaimer and information.",
  },
};

const App = () => {
  const location = useLocation();
  const path = location.pathname;
console.log(location.pathname);
const getTitle=location.pathname.split('/')
  // Use the exact match or fallback
  const seo = seoMap[path] || {
    title: getTitle[getTitle.length-1],
    description: "Welcome to My Blog – a hub for fashion, tech, lifestyle, and more.",
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
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
