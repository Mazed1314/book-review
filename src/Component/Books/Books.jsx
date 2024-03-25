import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <>
      <h2 className="text-3xl font-bold py-8 text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {books.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;
