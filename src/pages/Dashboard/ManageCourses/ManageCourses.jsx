import React, { useState } from "react";
import useInstruments from "../../../hooks/useInstruments";
import ManageCourseCard from "./ManageCourseCard";

const ManageCourses = () => {
  const [instruments] = useInstruments();
  const manageCourses = instruments.filter((course) => course.role);
  const defaultRole = manageCourses.filter(
    (course) => course.role === "pending"
  );

  const x = defaultRole.length > 0 && defaultRole[0].role;

  const feedback = manageCourses.filter((course) => course.feedback === "");
  const y = manageCourses.length > 0 && manageCourses[0].feedback;

  const [role, setRole] = useState(x);
  const [feedbackIs, setFeedbackIs] = useState(y);

  return (
    <div>
      <div>
        {manageCourses.map((course) => (
          <ManageCourseCard
            key={course._id}
            course={course}
            roleIn={role}
            setRole={setRole}
            feedbackIs={feedbackIs}
            setFeedbackIs={setFeedbackIs}
          ></ManageCourseCard>
        ))}
      </div>
    </div>
  );
};

export default ManageCourses;
