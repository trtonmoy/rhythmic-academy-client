import React from "react";
import useAdmission from "../../../hooks/useAdmission";
import SelectedClassCard from "./SelectedClassCard";

const SelectedClass = () => {
  const [subjects] = useAdmission();
  console.log(subjects);
  return (
    <section className="w-full px-4">
      <div className="grid md:grid-cols-3 md:gap-5">
        {subjects.map((subject) => (
          <SelectedClassCard
            key={subject._id}
            subject={subject}
          ></SelectedClassCard>
        ))}
      </div>
    </section>
  );
};

export default SelectedClass;
