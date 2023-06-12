import React from "react";
import { Link } from "react-router-dom";

const InstrumentCard = ({ item }) => {
  const { name, small_details, image } = item;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={image}
          alt="Item Image"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
          <Link>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Purchase
            </button>
          </Link>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-center text-xl mb-2"> {name} </div>
        <p className="text-gray-700 text-center text-base">
          {small_details.slice(0, 80)}....
        </p>
      </div>
    </div>
  );
};

export default InstrumentCard;
