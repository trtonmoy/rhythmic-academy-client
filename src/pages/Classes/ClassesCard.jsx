import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmission from "../../hooks/useAdmission";

const ClassesCard = ({ instrument }) => {
  const { user } = useContext(AuthContext);
  const [subjects, refetch] = useAdmission();

  const navigate = useNavigate();
  const location = useLocation();
  const {
    name,
    _id,
    price,
    small_details,
    image,
    available_seats,
    instructor_name,
  } = instrument;
  const [seats, setSeats] = useState(available_seats);

  const handleAdmission = (element) => {
    if (user && user.email) {
      const admittedSubject = {
        name,
        admissionId: _id,
        image,
        price,
        instructor_name,
        seats,
        email: user.email,
      };
      fetch("http://localhost:5000/admission", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(admittedSubject),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSeats(parseInt(seats) - 1);
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Admission has taken in ${instrument.name}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Log in Please",
        text: "You have to log in before you take admission",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In Here!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className={`bg-slate-50 ${seats === 0 ? "bg-red-700" : ""}`}>
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
            Available Seats : {seats}
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
