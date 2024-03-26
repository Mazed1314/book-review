import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Page/Home/Home.jsx";
import WishlistBook from "./Component/WishlistBook/WishlistBook.jsx";
import ErrorPage from "./Component/ErrorPage";
import BookDetails from "./Component/BookDetails/BookDetails.jsx";
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
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`/public/Books.json/${params?.id}`),
        // children: [
        //   {
        //     index: true,
        //     element: <h2>readBooks</h2>,
        //     loader: ({ params }) => fetch(`/public/Books.json/${params?.id}`),
        //   },
        //   {
        //     path: "wishlist",
        //     element: <h2>wishlist</h2>,
        //     loader: ({ params }) => fetch(`/public/Books.json/${params?.id}`),
        //   },
        // ],
      },
      {
        path: "/listed-book",
        element: <WishlistBook></WishlistBook>,
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
