import ListedBookPage from "../Page/ListedBook/ListedBookPage";
import { getBooks } from "../Utils";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const WishlistBook = () => {
  const [addWishlist, setAddWishlist] = useState([]);

  useEffect(() => {
    const getBook = getBooks();
    setAddWishlist(getBook);
  }, []);
  return (
    <div>
      <ListedBookPage></ListedBookPage>
      {addWishlist.map((book) => (
        <>
          <div className="card card-side bg-base-100 border rounded-lg flex flex-col md:flex-row mx-2 my-6">
            <figure className="rounded-lg p-4 md:m-4 w-full md:w-4/12 h-auto md:h-[300px] bg-gray-100">
              <img
                className="w-full md:w-[180px]  md:h-full"
                src={book.image}
                alt="Movie"
              />
            </figure>
            <div className="card-body md:pl-0">
              <h2 className="card-title text-xl font-bold">{book.bookName}</h2>
              <p className="text-slate-500 font-medium text-md py-2">
                <span>by: </span>
                {book.author}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-4 pb-3 w-full ">
                <span className=" font-bold text-center py-2 px-3 rounded-3xl">
                  Tag
                </span>
                <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
                  # {book.tags[0]}
                </span>
                <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
                  #{book.tags[1]}
                </span>
                <span className=" font-semibold text-center py-2 px-3 rounded-3xl text-slate-500">
                  <i className="fa-solid fa-calendar-days"></i> Year of
                  Publishing : {book.yearOfPublishing}
                </span>
              </div>
              <div className="flex gap-4 pb-3 border-b border-slate-300">
                <span className=" font-semibold text-center py-2 px-3 rounded-3xl text-slate-500">
                  <i className="fa-solid fa-user"></i> {book.publisher}
                </span>
                <span className=" font-semibold text-center py-2 px-3 rounded-3xl text-slate-500">
                  <i className="fa-regular fa-file"></i> Page {book.totalPages}
                </span>
              </div>
              <div className="md:w-7/12"></div>
              <div className="card-actions flex flex-wrap ">
                <button className="bg-blue-100 text-blue-600 font-semibold text-center py-2 px-3 rounded-3xl">
                  Category : {book.category}
                </button>
                <button className="bg-amber-100 text-amber-500 font-semibold text-center py-2 px-3 rounded-3xl">
                  Rating: {book.rating}
                </button>

                <Link
                  to={`/book-details/${book.bookId}`}
                  className="bg-green-600 text-white font-semibold text-center py-2 px-3 rounded-3xl"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default WishlistBook;
