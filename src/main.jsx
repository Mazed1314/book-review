import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Page/Home/Home.jsx";
import WishlistBook from "./Component/WishlistBook/WishlistBook.jsx";
import ErrorPage from "./Component/ErrorPage";
import BookDetails from "./Component/BookDetails/BookDetails.jsx";
import PagesToRead from "./Component/PagesToRead/PagesToRead.jsx";
import Contact from "./Component/Contact/Contact.jsx";
// import ListedBookPage from "./Component/Page/ListedBook/ListedBookPage.jsx";
import ListedBook from "./Component/Page/ListedBook/ListedBook.jsx";
import About from "./Component/About/About.jsx";
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
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/listed-book",
        element: <ListedBook></ListedBook>,
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/wishlist-book",
        element: <WishlistBook></WishlistBook>,
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/Books.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
