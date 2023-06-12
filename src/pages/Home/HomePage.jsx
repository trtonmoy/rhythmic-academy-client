import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Home/Banner";
import Instruments from "../../components/Home/Instruments";
import Instructors from "../../components/Home/Instructors";

const HomePage = () => {
  return (
    <section>
      <h4>home</h4>
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
