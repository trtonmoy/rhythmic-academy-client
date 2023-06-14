import React from "react";
import useInstruments from "../../../hooks/useInstruments";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  const [instruments] = useInstruments();
  const showInstruments = instruments.filter(
    (instrument) => instrument.role === "Denied"
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        {showInstruments.map((instrument) => (
          <FeedbackCard
            key={instrument._id}
            instrument={instrument}
          ></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
