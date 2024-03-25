import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Page/Home/Home.jsx";
import WishlistBook from "./Component/WishlistBook/WishlistBook.jsx";
import ErrorPage from "./Component/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <div className="">
            <Home></Home>
          </div>
        ),
        loader: () => fetch("/public/Books.json"),
      },
      {
        path: "/about",
        element: <WishlistBook></WishlistBook>,
      },

      {
        path: "/contact",
        element: <h2>Contact Us</h2>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
