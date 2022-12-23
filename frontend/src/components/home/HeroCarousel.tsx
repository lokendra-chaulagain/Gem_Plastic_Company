import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HeroCarousel = ({ banners }: any) => {
  console.log(banners);
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper">
        {banners &&
          banners.map((banner: any, index: any) => (
            <SwiperSlide key={index}>
              <div className="item_div">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${banner.image}`}
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                />

                <div className="home_banner_text_area text-center ">
                  <h2 className="banner_heading ">{banner.title}</h2>
                  <p className="banner_desc">{banner.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
