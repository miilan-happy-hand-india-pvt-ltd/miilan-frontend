import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Main.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navebar from "../navebar/Navebar";
import Footer from "../footer/Footer";
import Live from "../live/Live";
import { InfiniteMovingCardsDemo } from "../cards/InfiniteMovingCardsDemo";

function Main() {
  return (
    <div>
      <div className="w-[80vw] h-[100vh]">
        <div className="w-[80vw] h-[600px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[100vw] h-[100%] "
          >
            <div className="">
              <SwiperSlide>
                <img src="/images/image11.jpg" className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/istockphoto.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/image7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/chacha.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/image4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image5.jpg"
                  className="h-[500px] overflow-hidden"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image6.jpg"
                  className="h-[500px] overflow-hidden"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image3.jpg"
                  className="h-[500px] overflow-hidden"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/image10.jpg"
                  className="h-full overflow-hidden"
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="grid place-items-center w-[100vw] h-[700px] bg-white  border border-blue-500 ">
          <InfiniteMovingCardsDemo />
          <div className="flex justify-between m-10 w-[80vw]">
            <div className="text-center">
              <span className="text-2xl md:text-4xl lg:text-5xl">10K</span>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
                Live users
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-4xl lg:text-5xl">50K</span>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
                Happy users
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-4xl lg:text-5xl">20+</span>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-500">
                Cities
              </p>
            </div>
          </div>
        </div>
        <Live />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
