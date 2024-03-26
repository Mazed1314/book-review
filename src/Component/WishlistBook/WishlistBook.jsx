import ListedBookPage from "../Page/ListedBook/ListedBookPage";
const WishlistBook = () => {
  return (
    <div>
      <ListedBookPage></ListedBookPage>
      <div className="card card-side bg-base-100 border rounded-lg flex flex-col md:flex-row mx-2 my-6">
        <figure className="rounded-lg p-4">
          <img
            className="rounded-lg w-full"
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body md:pl-0">
          <h2 className="card-title text-xl font-bold">
            New movie is released!
          </h2>
          <p className="text-slate-500 font-medium text-md py-2">
            <span>by: </span>If a dog chews shoes whose shoes do
          </p>

          <div className="flex flex-wrap gap-2 md:gap-4 pb-3 w-full ">
            <span className=" font-bold text-center py-2 px-3 rounded-3xl">
              Tag
            </span>
            <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
              # Young Adult
            </span>
            <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
              #Identity
            </span>
            <span className=" font-semibold text-center py-2 px-3 rounded-3xl text-slate-500">
              <i className="fa-solid fa-calendar-days"></i> Year of Publishing :
              1987
            </span>
          </div>
          <div className="flex gap-4 pb-3 border-b border-slate-300">
            <span className=" font-semibold text-center py-2 px-3 rounded-3xl text-slate-500">
              <i className="fa-solid fa-user"></i> Publisher
            </span>
            <span className=" font-semibold text-center py-2 px-3 rounded-3xl text-slate-500">
              <i className="fa-regular fa-file"></i> Page 890
            </span>
          </div>
          <div className="md:w-7/12"></div>
          <div className="card-actions flex flex-wrap ">
            <button className="bg-blue-100 text-blue-600 font-semibold text-center py-2 px-3 rounded-3xl">
              Category : classic
            </button>
            <button className="bg-amber-100 text-amber-500 font-semibold text-center py-2 px-3 rounded-3xl">
              Rating: 257
            </button>
            <button className="bg-green-600 text-white font-semibold text-center py-2 px-3 rounded-3xl">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;
