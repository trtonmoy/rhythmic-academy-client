import React from "react";
import useInstruments from "../../hooks/useInstruments";
import InstrumentCard from "./InstrumentCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Instruments = () => {
  const [instruments] = useInstruments();
  const showInstruments = instruments.filter(
    (instrument) =>
      instrument.role !== "pending" && instrument.role !== "Denied"
  );
  // console.log(instruments);
  return (
    <section>
      <SectionTitle
        heading={"Our Top Classes"}
        subHeading={
          "We are passionate at our job and we are dedicated to teach. We provide the best and We care for our pupils."
        }
      ></SectionTitle>
      <div className="xs:px-2 md:grid md:grid-cols-4 gap-2">
        {showInstruments.slice(0, 8).map((item) => (
          <InstrumentCard key={item._id} item={item}></InstrumentCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/classes">
          <button className="btn text-xl font-medium text-white bg-purple-500 hover:bg-purple-800 hover:font-semibold px-12 my-8 py-2 rounded-xl btn-outline-secondary">
            Take Admission
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Instruments;
