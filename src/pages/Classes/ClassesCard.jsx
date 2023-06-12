import React from "react";
import Swal from "sweetalert2";

const ClassesCard = ({ instrument }) => {
  const {
    name,
    _id,
    price,
    small_details,
    image,
    available_seats,
    instructor_name,
  } = instrument;

  const handleAdmission = (element) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Admission has taken in ${instrument.name}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="bg-slate-50">
      <div className="relative rounded-lg overflow-hidden shadow-lg  p-4">
        <img src={image} alt={name} className="w-full  h-96 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <h3 className="text-lg font-semibold text-white">
            {instructor_name}
          </h3>
          <p className="text-sm text-white">{small_details}</p>
          <p className="text-lg text-purple-400 font-bold my-2 underline">
            Available Seats : {available_seats}
          </p>
          <button
            onClick={() => handleAdmission(instrument)}
            className="my-2 ml-2 py-2 px-4 bg-purple-500 text-white text-lg font-medium hove:bg-purple-800 hover:font-semibold tracking-wide rounded-lg"
          >
            Admission
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
