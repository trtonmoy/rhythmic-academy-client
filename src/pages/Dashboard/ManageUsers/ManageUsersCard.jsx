import React, { useState } from "react";
import Swal from "sweetalert2";

const ManageUsersCard = ({ user }) => {
  const { name, email, _id } = user;
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleMakeAdmin = (id) => {
    setButtonDisabled(true);
    fetch(`https://rhythmic-academy-server.vercel.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            `You have just made ${name} as an Admin`,
            "success"
          );
        }
      });
  };

  const handleMakeInstructor = (id) => {
    setButtonDisabled(true);
    fetch(`https://rhythmic-academy-server.vercel.app/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "Instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Updated!",
            `You have just made ${name} as an Instructor.`,
            "success"
          );
        }
      });
  };

  return (
    <div
      className=" p-6  bg-amber-200 rounded-lg my-3
    4 border-2"
    >
      <div className="flex justify-between items-center">
        <h2> {name} </h2>
        <h5> {email} </h5>
        <div className=" flex flex-col">
          <button
            disabled={isButtonDisabled}
            onClick={() => handleMakeAdmin(_id)}
            className={`border px-2 py-1 my-1 rounded-lg ${
              isButtonDisabled ? "bg-red-600" : "btn-outline btn-success "
            }`}
          >
            Make Admin
          </button>
          <button
            disabled={isButtonDisabled}
            onClick={() => handleMakeInstructor(_id)}
            className={`border px-2 py-1 my-1 rounded-lg ${
              isButtonDisabled ? "bg-red-600" : "btn-outline btn-success"
            }`}
          >
            Make Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersCard;
