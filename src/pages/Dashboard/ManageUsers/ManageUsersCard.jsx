import React from "react";

const ManageUsersCard = ({ user }) => {
  const { name, email } = user;
  return (
    <div
      className=" p-6  bg-amber-200 rounded-lg my-3
    4 border-2"
    >
      <div className="flex justify-between items-center">
        <h2> {name} </h2>
        <h5> {email} </h5>
        <div className=" flex flex-col">
          <button className="btn-outline btn-success px-2 py-1 my-1 rounded-lg">
            {" "}
            Make Admin{" "}
          </button>
          <button className="btn-outline btn-success px-2 py-1 my-1 rounded-lg">
            {" "}
            Make Instructor{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersCard;
