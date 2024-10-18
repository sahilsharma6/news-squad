import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ArticlePage from "./pages/ArticlePage.jsx";
import Home from "./pages/Home.jsx";
import NewsLayout from "./components/content1.jsx";
const router = 
createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "article/:id", element: <ArticlePage /> },
    ],
  },
]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
