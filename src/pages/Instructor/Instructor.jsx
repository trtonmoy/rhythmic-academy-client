import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Instructor = () => {
  const instructor = useLoaderData();
  const { name, email, skill, experience, bio, image } = instructor;
  return (
    <section>
      <SectionTitle
        heading={"our instructor"}
        subHeading={"dedicated to teach you with best care"}
      ></SectionTitle>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="max-w-5xl mx-auto flex bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/3 bg-indigo-500">
            <img src={image} alt="Instructor" className="h-full object-cover" />
          </div>
          <div className="w-2/3 p-8">
            <h1 className="text-4xl font-bold mb-4">{name}</h1>
            <p className="text-gray-500 mb-6">{email}</p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Experience</h2>
              <p className="text-gray-800">{experience}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Bio</h2>
              <p className="text-gray-800">{bio}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              <ul className="list-disc ml-6">
                {skill.map((skill) => (
                  <li key={skill} className="text-gray-800">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
