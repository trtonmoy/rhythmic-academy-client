import React from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Home/Banner";
import Instruments from "../../components/Home/Instruments";

const HomePage = () => {
  return (
    <section>
      <h4>home</h4>
      <Slider></Slider>
      <Banner></Banner>
      <Instruments></Instruments>
    </section>
  );
};

export default HomePage;
