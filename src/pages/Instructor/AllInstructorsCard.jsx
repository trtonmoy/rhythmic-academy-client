import React from "react";
import { Link } from "react-router-dom";

const AllInstructorsCard = ({ instructor }) => {
  const { name, email, skill, experience, _id, bio, image } = instructor;
  return (
    <div className="">
      <div className="card lg:card-side bg-base-100 shadow-xl h-[500px]">
        <figure className="w-[50%] p-2">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body w-[40%]">
          <h2 className="card-title"> {name} </h2>
          <p> {email} </p>
          <p>
            <span className="text-lg text-slate-600 font-semibold">
              Experience :
            </span>
            <br /> {experience}
          </p>
          <p>
            <span className="text-lg text-slate-600 font-semibold">Bio :</span>{" "}
            <br /> {bio}
          </p>
          <p>
            <span className="text-lg text-slate-600 font-semibold">
              Expert On :
            </span>
            {skill.map((gig, idx) => (
              <li key={idx}> {gig} </li>
            ))}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/instructors/${_id}`}>
              <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-full text-sm transition duration-300">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInstructorsCard;
