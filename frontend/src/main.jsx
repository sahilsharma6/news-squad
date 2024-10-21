import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import DashboardLayout from "./pages/Dashboard.jsx";
import DashboardHome from "./components/DashboardHome.jsx";
import FashionPosts from "./pages/FashionPosts.jsx";
import ContentEditor from "./components/Editor.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:title", element: <ArticlePage /> },
      { path: "/category/fashion", element: <FashionPosts /> },
      
    ],
  },
  {
    path: "/signin",
    element: <SignIn/>, 
  },
  {
    path: "/register",
    element: <Register/>, 
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <DashboardHome /> },
      {
        path: "/dashboard/create-article",
        element: <ContentEditor />,
      },
    ],
  },
]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
