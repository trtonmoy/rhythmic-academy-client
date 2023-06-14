import React from "react";

const FeedbackCard = ({ instrument }) => {
  const { image, instructor_name, name, feedback } = instrument;
  return (
    <div className="flex flex-col justify-center items-center">
      <figure>
        <img className="w-96" src={image} alt="" />
      </figure>
      <div>
        <h1 className="font-bold text-xl my-2"> {name} </h1>
        <h4 className="font-semibold text-base"> {instructor_name} </h4>
      </div>
      <p className="my-4">
        Feedback :{" "}
        <span className="text-base font-medium text-orange-500 p-2 border border-secondary rounded">
          {feedback}
        </span>
      </p>
    </div>
  );
};

export default FeedbackCard;
