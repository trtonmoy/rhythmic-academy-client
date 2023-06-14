import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageCourseCard = ({
  course,
  roleIn,
  setRole,
  feedbackIs,
  setFeedbackIs,
}) => {
  const {
    _id,
    name,
    email,
    price,
    image,
    available_seats,
    instructor_name,
    role,
    enrolled_studs,
  } = course;

  const writeFeedback = (event) => {
    setFeedbackIs(event.target.value);
    setRole("Denied");
  };

  const handleUpdate = (id) => {
    const update = { role: roleIn, feedback: feedbackIs };
    fetch(`http://localhost:5000/instruments/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your data has been updated.", "success");
        }
      });
  };

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
        <h2>
          Name : <br /> {name}
        </h2>
      </div>
      <div>
        <p> Price : {price} </p>
        <p> Feedback : {feedbackIs} </p>
        <p> Enrolled Students : {enrolled_studs} </p>
      </div>
      <div>
        <h6>
          Role: <br /> {roleIn}
          <br />
        </h6>
      </div>
      <div className="flex flex-col">
        <Link>
          <button
            onClick={() => window.my_modal_5.showModal()}
            className="my-2 px-3 py-2 border rounded"
          >
            Deny
          </button>
        </Link>
        <button className="my-2 px-3 py-2 border rounded"> Approve </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Give a valid Reason...!!</h3>
          <p className="py-4">
            <textarea
              onChange={writeFeedback}
              name="feedback"
              placeholder="Write a feedback here...."
            ></textarea>
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => handleUpdate(_id)} className="btn">
              Send
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageCourseCard;
