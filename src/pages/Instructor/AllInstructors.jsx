import React from "react";
import useInstructors from "../../hooks/useInstructors";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AllInstructorsCard from "./AllInstructorsCard";

const AllInstructors = () => {
  const [instructors] = useInstructors();
  return (
    <section>
      <SectionTitle
        heading={"all instructors"}
        subHeading={"the best of the best"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {instructors.map((instructor) => (
          <AllInstructorsCard
            key={instructor._id}
            instructor={instructor}
          ></AllInstructorsCard>
        ))}
      </div>
    </section>
  );
};

export default AllInstructors;
