import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Home/Banner";
import Instruments from "../../components/Home/Instruments";
import Instructors from "../../components/Home/Instructors";
import Hero from "../../components/Home/Hero";

const HomePage = () => {
  return (
    <section>
      {/* <Hero></Hero> */}
      <div className="divider"></div>
      <Slider></Slider>
      <div className="divider"></div>
      <Banner></Banner>
      <div className="divider"></div>
      <Instruments></Instruments>
      <div className="divider"></div>
      <Instructors></Instructors>
    </section>
  );
};

export default HomePage;
