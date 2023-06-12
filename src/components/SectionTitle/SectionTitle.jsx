import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-8 my-5">
      <h5 className="font-medium my-3 text-red-600 text-lg ">
        Dedicate to Teaching
      </h5>
      <h1 className="text-4xl font-medium my-3 uppercase"> {heading} </h1>
      <h4 className="text-xl text-slate-500 font-normal"> {subHeading} </h4>
    </div>
  );
};

export default SectionTitle;
