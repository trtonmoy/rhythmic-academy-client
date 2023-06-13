import React from "react";
import { Link } from "react-router-dom";

const SelectedClassCard = ({ subject }) => {
  const { name, image, price, instructor_name } = subject;
  return (
    <div>
      <div className="max-w-sm h-[400px] rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> {name} </div>
          <div className="font-semibold text-base mb-2">
            {" "}
            {instructor_name}{" "}
          </div>
          <p className="text-gray-700 font-medium text-base">
            {" "}
            Price : $ {price}
          </p>
        </div>
        <div className="w-full text-end pr-5">
          <Link to="/dashboard/pay">
            <button className="bg-purple-600 text-white font-medium text-lg px-4 py-2 rounded-xl">
              pay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectedClassCard;
