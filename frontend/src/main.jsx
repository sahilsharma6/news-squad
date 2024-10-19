import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import ArticlePage from "./pages/ArticlePage.jsx";
import Home from "./pages/Home.jsx";
=======
import Home from "./pages/Home.jsx";
import DashboardLayout from "./pages/Dashboard.jsx";
import DashboardHome from "./components/DashboardHome.jsx";
import FashionPosts from "./pages/FashionPosts.jsx";
import ContentEditor from "./components/Editor.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <Home /> },
<<<<<<< HEAD
      { path: "article/:id", element: <ArticlePage /> },
=======
      { path: "/:title", element: <ArticlePage /> },
      { path: "/category/fashion", element: <FashionPosts /> },
    ],
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
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
