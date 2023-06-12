import React from "react";
import useInstruments from "../../hooks/useInstruments";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [instruments] = useInstruments();
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-4">
        {instruments.map((instrument) => (
          <ClassesCard
            key={instrument._id}
            instrument={instrument}
          ></ClassesCard>
        ))}
      </div>
    </section>
  );
};

export default Classes;
