import { Container } from "postcss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuOptions = (
    <>
      <li>
        <Link> Home </Link>
      </li>
      <li>
        <Link> Instructors </Link>
      </li>
      <li>
        <Link> Classes </Link>
      </li>
      <li className="w-10 rounded-full">
        <img src="" alt="" />
      </li>
      <li>
        <Link> Sign Up </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar fixed z-10 shadow-xl bg-purple-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-purple-950 hover:bg-purple-200 normal-case text-xl"
          >
            Rhythmic
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-medium text-purple-950 text-lg menu-horizontal px-1">
            {menuOptions}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
