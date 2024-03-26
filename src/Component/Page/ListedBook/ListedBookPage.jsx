import { NavLink } from "react-router-dom";

const ListedBookPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold py-8 text-center bg-gray-100 rounded-lg">
        Listed Books
      </h2>
      <div className="text-center">
        <div className="dropdown my-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm m-1 bg-green-600 text-white"
          >
            Short by <i className="fa-solid fa-arrow-down-short-wide"></i>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 p-2 rounded-t-lg border-b-0 "
              : "p-2 border-b-2"
          }
          to="/listed-book"
        >
          Read Books
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-2 p-2 rounded-t-lg border-b-0 "
              : "p-2 border-b-2"
          }
          to="/wishlist-book"
        >
          Wishlist Books
        </NavLink>
      </div>
    </div>
  );
};

export default ListedBookPage;
