// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.bookId === book.bookId);

  if (isExist) {
    return toast.error("Already Add!");
  }
  books.push(book);
  //
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Added to Wish-list Successfully!");
};

export const getReadBooks = () => {
  let readBooks = [];
  const storedBooks = localStorage.getItem("readBooks");
  if (storedBooks) {
    readBooks = JSON.parse(storedBooks);
  }
  return readBooks;
};

export const saveReadBook = (book) => {
  let readBooks = getReadBooks();
  const isExist = readBooks.find((b) => b.bookId === book.bookId);
  if (isExist) {
    return toast.error("Already Add!");
  }
  readBooks.push(book);
  //
  localStorage.setItem("readBooks", JSON.stringify(readBooks));
  toast.success("Added to Read-list Successfully!");
};
