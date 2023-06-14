import React from "react";
import useInstruments from "../../../hooks/useInstruments";
import CourseCard from "./CourseCard";

const MyCourses = () => {
  const [instruments] = useInstruments();
  const myCourses = instruments.filter((instrument) => instrument.role);
  // console.log(myCourses);
  return (
    <div className="w-full">
      <div>
        {
          myCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard> )
        }
      </div>
    </div>
  );
};

export default MyCourses;
