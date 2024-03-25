import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:flex justify-between w-full">
      <a className="btn btn-ghost text-xl">Book Vibe</a>
      <div className="">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Sign In </a>
              </li>
              <li>
                <a>Sign Up</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3">
            <NavLink
              to="/"
              className={(isActive) => {
                isActive ? "text-green-950 font-bold" : "font-bold";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(isActive) => {
                isActive ? "text-green-950 font-bold" : "font-bold";
              }}
            >
              About Us
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <a className="btn mr-3">Sign In</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;