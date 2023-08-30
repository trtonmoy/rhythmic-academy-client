import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="w-full h-[500px] relative"
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="absolute left-5 bottom-36 text-purple-800 text-5xl font-extrabold">
            Rhythmic Academy <br /> Crafting Melodies in Every Note
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://images.unsplash.com/photo-1505926237209-1aeec66fc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="absolute left-5 bottom-10 text-purple-800 text-5xl font-extrabold">
            Rhythmic Academy <br /> Crafting Melodies in Every Note
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://images.unsplash.com/photo-1609196595770-10faedf23b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="absolute left-5 bottom-10 text-purple-800 text-5xl font-extrabold">
            Rhythmic Academy <br /> Crafting Melodies in Every Note
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
          />
          <p className="absolute left-5 bottom-10 text-purple-800 text-5xl font-extrabold">
            Rhythmic Academy <br /> Crafting Melodies in Every Note
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px]"
            src="https://images.unsplash.com/photo-1519139270028-ab664cf42264?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <p className="absolute left-5 bottom-10 text-purple-800 text-5xl font-extrabold">
            Rhythmic Academy <br /> Crafting Melodies in Every Note
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
