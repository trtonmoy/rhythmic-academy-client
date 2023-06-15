import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgPiano } from "react-icons/cg";
import { IoMdPeople, IoMdAlbums } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAdmission from "../../hooks/useAdmission";
import { IoSchoolOutline } from "react-icons/io5";
import { LuBookPlus } from "react-icons/lu";
import {
  MdManageAccounts,
  MdOutlineLibraryBooks,
  MdOutlineManageHistory,
} from "react-icons/md";

const Dashboard = () => {
  const [subjects] = useAdmission();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div>
            <SectionTitle
              heading={"welcome to dashboard"}
              subHeading={"Do Your Activities Here"}
            ></SectionTitle>
          </div>
          <div className="mb-12 w-full pl-4">
            <Outlet></Outlet>
          </div>
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
                <BiHome></BiHome> Home
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <CgPiano></CgPiano> Courses
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <IoMdPeople></IoMdPeople> Our Instructors
              </Link>
            </li>
            <li>
              <Link to="/dashboard/selected">
                <IoMdAlbums></IoMdAlbums> Selected Classes
                <button className="btn ml-2">
                  <IoSchoolOutline className="" />
                  <div className="badge badge-secondary">
                    +{subjects?.length || 0}
                  </div>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolled">
                <HiBadgeCheck></HiBadgeCheck> Enrolled Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addcourse">
                <LuBookPlus></LuBookPlus> Add a Course
              </Link>
            </li>
            <li>
              <Link to="/dashboard/mycourses">
                <MdOutlineLibraryBooks></MdOutlineLibraryBooks> My Courses
              </Link>
            </li>
            <li>
              <Link to="/dashboard/managecourses">
                <MdOutlineManageHistory></MdOutlineManageHistory> Manage Courses
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manageusers">
                <MdManageAccounts></MdManageAccounts> Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
