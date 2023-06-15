import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    name,
    email,
    price,
    small_details,
    image,
    available_seats,
    instructor_name,
    role,
    enrolled_studs,
    feedback,
  } = course;
  return (
    <div className="flex items-center justify-between bg-orange-200 p-2 rounded-sm my-2">
      <figure>
        <img
          className="w-64 p-2 rounded-lg bg-slate-100"
          src={image}
          alt="Image"
        />
      </figure>
      <div>
        <h2>Name : {name}</h2>
      </div>
      <div>
        <p> Price : {price} </p>
        <p> Enrolled Students : {enrolled_studs} </p>
      </div>
      <div>
        <h6>
          Role: <br /> {role}
        </h6>
      </div>
      <div className="flex flex-col">
        <Link to="/dashboard/feedback">
          <button className="my-2 px-3 py-2 border rounded btn-outline btn-info">
            {" "}
            Feedback{" "}
          </button>
        </Link>
        <button className="my-2 px-3 py-2 border rounded btn-outline btn-secondary">
          {" "}
          Update{" "}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
