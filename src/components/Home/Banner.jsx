import React from "react";

const Banner = () => {
  return (
    <div className="hover:scale-105 transition duration-300">
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto px-4 ">
          <div className="md:flex md:items-center xs:space-y-3 md:justify-between ">
            <div>
              <h1 className="text-4xl font-bold text-white">
                Welcome to Our Musical School
              </h1>
              <p className="mt-2 text-lg text-white">
                Unlock your musical potential with our expert instructors
              </p>
            </div>
            <img
              className="h-64 w-auto hover:scale-105 transition duration-300"
              src="https://plus.unsplash.com/premium_photo-1663099231979-8783a39dfad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Musical School"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
