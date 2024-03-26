import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();

  // console.log(alldata);
  const { bookId } = useParams();
  // console.log(bookId);
  const book = books.find((b) => b.bookId == bookId);
  const {
    bookName,
    author,
    category,
    yearOfPublishing,
    totalPages,
    publisher,
    tags,
    image,
    review,
    rating,
  } = book;
  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row mx-2 my-4">
      <figure className="md:w-5/12 h-[550px] rounded-lg bg-gray-100">
        <img
          className="rounded-lg w-[300px] h-[400px]"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body md:w-7/12">
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <p className="text-slate-500 font-medium text-md">
          <span>by: </span>
          {author}
        </p>
        <p className="py-3 border-t border-b border-slate-300 text-slate-500 font-medium text-md">
          {category}
        </p>
        <p className="mb-5">
          <span className="font-bold text-lg">Review : </span>
          {review}
        </p>
        <div className="flex gap-4 pb-3 border-b border-slate-300">
          <span className=" font-bold text-center py-2 px-3 rounded-3xl">
            Tag
          </span>
          <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
            {tags[0]}
          </span>
          <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
            {tags[1]}
          </span>
        </div>
        <div className="md:w-7/12">
          <div className="flex justify-between ">
            <span className="text-slate-500 font-medium text-md">
              Number of Pages :
            </span>
            <span className=" font-bold text-center rounded-3xl">
              {totalPages}
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-slate-500 font-medium text-md">
              Publisher :
            </span>
            <span className=" font-bold text-center rounded-3xl">
              {publisher}
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-slate-500 font-medium text-md">
              Year of Publishing :
            </span>
            <span className=" font-bold text-center rounded-3xl">
              {yearOfPublishing}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500 font-medium text-md">Rating :</span>
            <span className=" font-bold text-center rounded-3xl">{rating}</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-sky-400 text-white">Read</button>
          <button className="btn bg-green-400 text-white">Whish List</button>
        </div>
      </div>
    </div>
  );
};
BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetails;
