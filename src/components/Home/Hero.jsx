import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-blue-500">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-auto"
            src="https://images.unsplash.com/photo-1630885409152-7cabaa5fc19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Hero Image"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 py-12 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Discover the Joy of Music
              </h1>
              <p className="text-lg text-white">
                Unlock your musical potential with our expert instructors
              </p>
              <button className="mt-6 bg-white text-blue-500 font-semibold py-2 px-6 rounded-full">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
