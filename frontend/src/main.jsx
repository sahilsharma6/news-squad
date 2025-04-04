import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ArticlePage from "./pages/ArticlePage.jsx";
import Home from "./pages/Home.jsx";
import DashboardLayout from "./pages/Dashboard.jsx";
import DashboardHome from "./components/DashboardHome.jsx";
import FashionPosts from "./pages/FashionPosts.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/Register.jsx";
import LifeStyle from "./pages/LifeStyle.jsx";
import Gadgets from "./pages/Gadgets.jsx";
import AddPost from "./components/Dashboard/AddPost.jsx";
import AllPosts from "./components/Dashboard/AllPosts.jsx";
import EditPost from "./components/Dashboard/EditPost.jsx";
import AddCategory from "./components/Dashboard/AddCategory.jsx";
import AllCategories from "./components/Dashboard/AllCategories.jsx";
import EditCategory from "./components/Dashboard/EditCategory.jsx";
import UserProfile from "./components/UserProfile.jsx";
import AllUsers from "./components/Dashboard/AllUsers.jsx";
import Policy from "./pages/Policy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
     
      { path: "/", element: <Home /> },
      { path: "/post/:id", element: <ArticlePage /> },
      { path: "/category/fashion", element: <FashionPosts /> },
      { path: "/category/lifestyle", element: <LifeStyle /> },
      {path:'/policy',element:<Policy />},
      {path:'/disclaimer',element:<Disclaimer />},
      {
        path: "category/gadgets",
        element: <Gadgets param="Gadgets" />,
      },
      {
        path: "category/mobile-phones",
        element: <Gadgets param="Mobile-phones" />,
      },
      {
        path: "category/photography",
        element: <Gadgets param="Photography" />,
      },
      {
        path: "category/reviews",
        element: <Gadgets param="Reviews" />,
      },
    ],
  },
  { path: "/profile", element: <UserProfile /> },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <DashboardHome /> },
      {
        path: "/dashboard/create-article",
        element: <AddPost />,
      },
      {
        path: "/dashboard/AllPosts",
        element: <AllPosts />,
      },
      {
        path: "/dashboard/AllUsers",
        element: <AllUsers />,
        
      },
      {
        path: "/dashboard/EditPost/:id",
        element: <EditPost />,
      },

      {
        path: "/dashboard/EditCategory/:id",
        element: <EditCategory />,
      },

      {
        path: "/dashboard/AddCategory",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/AllCategories",
        element: <AllCategories />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);
