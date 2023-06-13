import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgPiano } from "react-icons/cg";
import { IoMdPeople, IoMdAlbums } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div>
            <h1>Welcome to dashboard</h1>
          </div>
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/">
                {" "}
                <BiHome></BiHome> Home
              </Link>
            </li>
            <li>
              <Link to="/classes">
                {" "}
                <CgPiano></CgPiano> Courses
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                {" "}
                <IoMdPeople></IoMdPeople> Our Instructors
              </Link>
            </li>
            <li>
              <Link to="/dashboard/selected">
                {" "}
                <IoMdAlbums></IoMdAlbums> Selected Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolled"> <HiBadgeCheck></HiBadgeCheck> Enrolled Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
