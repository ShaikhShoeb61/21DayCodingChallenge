import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import ProductGallery from "./Components/ProductGallery";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":professional",
        element: <ProductGallery />,
      },
      {
        path: "wardrobe-essentials /*",
        element: <ProductGallery />,
      },
      {
        path: "education /*",
        element: <ProductGallery />,
      },
      {
        path: "apparel-&-style /*",
        element: <ProductGallery />,
      },
    ],
  },

  {
    path: "about",
    element: <About />,
  },
]);
