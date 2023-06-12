import React from "react";
import useInstruments from "../../hooks/useInstruments";
import InstrumentCard from "./InstrumentCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Instruments = () => {
  const [instruments] = useInstruments();
  console.log(instruments);
  return (
    <section>
      <SectionTitle
        heading={"Our Top Classes"}
        subHeading={
          "We are passionate at our job and we are dedicated to teach. We provide the best and We care for our pupils."
        }
      ></SectionTitle>
      <div className="xs:px-2 md:grid md:grid-cols-4 gap-2">
        {instruments.map((item) => (
          <InstrumentCard key={item._id} item={item}></InstrumentCard>
        ))}
      </div>
    </section>
  );
};

export default Instruments;
