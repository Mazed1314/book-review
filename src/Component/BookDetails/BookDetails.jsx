import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row mx-2">
      <figure className="md:w-5/12 h-[550px] rounded-lg">
        <img
          className="rounded-lg w-full"
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body md:w-7/12">
        <h2 className="card-title text-3xl font-bold">
          New movie is released!
        </h2>
        <p className="text-slate-500 font-medium text-md">
          <span>by: </span>If a dog chews shoes whose shoes do
        </p>
        <p className="py-3 border-t border-b border-slate-300 text-slate-500 font-medium text-md">
          Fiction
        </p>
        <p className="mb-5">
          <span className="font-bold text-lg">Review : </span>Click the button
          to watc-2h on Jetflix app. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Expedita laudantium error odio ad! Facilis non,
          officia possimus repellat similique aperiam recusandae nisi! Eius,
          nostrum ab. A, est voluptates impedit tenetur molestias voluptatum
          facere iste pariatur vel cum recusandae soluta cumque magni doloremque
          quibusdam dolorum dicta, velit ipsum.
        </p>
        <div className="flex gap-4 pb-3 border-b border-slate-300">
          <span className=" font-bold text-center py-2 px-3 rounded-3xl">
            Tag
          </span>
          <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
            # Young Adult
          </span>
          <span className="bg-green-50 text-green-700 font-semibold text-center py-2 px-3 rounded-3xl">
            #Identity
          </span>
        </div>
        <div className="md:w-7/12">
          <div className="flex justify-between ">
            <span className="text-slate-500 font-medium text-md">
              Number of Pages :
            </span>
            <span className=" font-bold text-center rounded-3xl">
              45855555555551
            </span>
          </div>
          <div className="flex justify-between ">
            <span className="text-slate-500 font-medium text-md">
              Publisher :
            </span>
            <span className=" font-bold text-center rounded-3xl">Tayuiug</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-slate-500 font-medium text-md">
              Year of Publishing :
            </span>
            <span className=" font-bold text-center rounded-3xl">8555555</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500 font-medium text-md">555 :</span>
            <span className=" font-bold text-center rounded-3xl">56</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn ">Read</button>
          <button className="btn btn-primary">Whish List</button>
        </div>
      </div>
    </div>
  );
};
BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetails;
