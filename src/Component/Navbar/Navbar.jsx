import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:flex justify-between w-full mt-2 mb-6">
      <a className="btn btn-ghost text-2xl font-bold">
        <img src="/Images/book-vibe.png" className="w-[60px] h-auto" alt="" />
        Book
        <span className="bg-yellow-500 text-white px-2 rounded-lg">Vibe</span>
      </a>
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
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700  rounded-lg font-bold"
                    : "font-bold"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-700 rounded-lg font-bold" : "font-bold"
                }
                to="/listed-book"
              >
                Listed Books
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-700 rounded-lg font-bold" : "font-bold"
                }
                to="/pages-to-read"
              >
                Pages to Read
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-700 rounded-lg font-bold" : "font-bold"
                }
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-700 rounded-lg font-bold" : "font-bold"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border border-green-600 px-2 rounded-lg font-bold"
                  : "font-bold"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border border-green-600 px-2 rounded-lg font-bold"
                  : "font-bold"
              }
              to="/listed-book"
            >
              Listed Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border border-green-600 px-2 rounded-lg font-bold"
                  : "font-bold"
              }
              to="/pages-to-read"
            >
              Pages to Read
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border border-green-600 px-2 rounded-lg font-bold"
                  : "font-bold"
              }
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border border-green-600 px-2 rounded-lg font-bold"
                  : "font-bold"
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <a className="btn btn-sm mr-3 bg-green-600 text-white">Sign In</a>
        <a className="btn btn-sm mr-3 bg-yellow-500 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
