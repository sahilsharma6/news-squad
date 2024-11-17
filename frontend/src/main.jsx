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
      {
        path: "category/gadgets",
        element: <Gadgets param="gadgets" />,
      },
      {
        path: "category/mobile-phones",
        element: <Gadgets param="mobile-phones" />,
      },
      {
        path: "category/photography",
        element: <Gadgets param="photography" />,
      },
      {
        path: "category/reviews",
        element: <Gadgets param="reviews" />,
      },
    ],
  },
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
        path: "/dashboard/EditPost/:id",
        element: <EditPost />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
