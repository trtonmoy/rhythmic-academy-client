import React from "react";
import useInstruments from "../../hooks/useInstruments";
import InstrumentCard from "./InstrumentCard";

const Instruments = () => {
  const [instruments] = useInstruments();
  console.log(instruments);
  return (
    <section>
      <div className="sm:px-3 md:grid md:grid-cols-4 gap-2">
        {instruments.map((item) => (
          <InstrumentCard key={item.id} item={item}></InstrumentCard>
        ))}
      </div>
    </section>
  );
};

export default Instruments;
