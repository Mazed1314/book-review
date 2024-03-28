import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero  bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around w-full md:px-12">
        <img
          src="/Images/pngwing 1.png"
          className="max-w-sm rounded-lg md:shadow-2xl"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 md:pr-12">
            Most popular and most read books
          </h1>

          <Link
            to="/listed-book"
            className="btn btn-sm border border-green-600  text-green-700"
          >
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
