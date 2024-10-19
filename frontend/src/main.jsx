import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import FashionPosts from "./pages/FashionPosts.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";


// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<App />} >
//     <Route path="/" element={ <Home />} />
//     <Route path="/category/fashion" element={<FashionPosts/>}/>
//     </Route>
// ))


const router=createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:title", element: <ArticlePage /> },  
      { path: "/category/fashion", element: <FashionPosts/> },

    ],
  },
]
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
