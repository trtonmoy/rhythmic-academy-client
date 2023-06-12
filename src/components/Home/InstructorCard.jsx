import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { _id, name, image, skill } = instructor;

  return (
    <div className="my-5">
      <div className="w-full h-full text-center bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 my-4">
        <img
          src={image}
          alt="Music Teacher"
          className="w-full h-60 object-cover"
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800"> {name} </h2>
          <p className="text-gray-600 text-sm mt-2">
            {skill &&
              skill.map((item, idx) => <span key={idx}> {item} , </span>)}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default InstructorCard;
