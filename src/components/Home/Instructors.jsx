import React from "react";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "./InstructorCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Instructors = () => {
  const [instructors] = useInstructors();
  return (
    <section>
      <SectionTitle
        heading={"Our honorable teachers"}
        subHeading={"We provide the best and We care for our every students"}
      ></SectionTitle>
      <div className="sx:px-2 grid md:grid-cols-3 lg:grid-cols-4 gap-2 py-5">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
