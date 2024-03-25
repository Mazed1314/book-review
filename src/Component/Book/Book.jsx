import PropTypes from "prop-types";
const Book = ({ book }) => {
  const { bookName, author, category, rating, tags, image } = book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
      <figure className="p-4 ">
        <img
          className="rounded-lg w-full h-[300px] md:h-[400px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body pt-0">
        <div className="flex gap-5">
          <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
            {tags[0]}
          </span>
          <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
            {tags[1]}
          </span>
        </div>
        <div className="">
          <h2 className="card-title font-bold text-2xl">{bookName}</h2>
          <p className="text-slate-500 font-medium text-md">
            <span>by: </span>
            {author}
          </p>
        </div>
        <div className="card-actions justify-between">
          <div className=" text-slate-500 font-semibold text-lg">
            {category}
          </div>
          <div className="text-slate-500 font-semibold text-lg">
            <span>
              <i className="fa-regular fa-star"></i>
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
