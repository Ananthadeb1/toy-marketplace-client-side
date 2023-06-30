import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("header: ", user?.photoURL);
  return (
    <div>
      <div className="navbar bg-slate-900 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 bg-slate-900 text-white shadow rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Link to="/">Toy House</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <h4>
              <h1 onClick={logOut} className="btn mr-4 hover:bg-gray-700">
                SignOut
              </h1>
              {user.displayName}
            </h4>
          ) : (
            <Link to="/login" className=" hover:bg-gray-700 btn mr-4">
              Login
            </Link>
          )}
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
