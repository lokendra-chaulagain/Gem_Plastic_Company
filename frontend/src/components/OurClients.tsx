import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const OurClients = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="test"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurClients;
