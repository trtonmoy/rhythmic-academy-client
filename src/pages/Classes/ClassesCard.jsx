import React from "react";
import { Link } from "react-router-dom";

const ClassesCard = ({ instrument }) => {
  const { name, _id, small_details, image } = instrument;
  return (
    <div className="">
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
        <img src={image} alt={name} className="w-full h-96 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-white">{small_details}</p>
          <button className="mt-2 py-3 px-4 bg-purple-500 text-white text-lg font-medium hove:bg-purple-800 hover:font-semibold tracking-wide rounded-lg">
            Admission
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
