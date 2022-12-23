import Image from "next/image";
import React from "react";
import banner1 from "../assets/banner1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CategoryCarousel = ({ category }: any) => {
  return (
    <>
      {category && (
        <Swiper
          // navigation={true}
          // loop={true}
          // modules={[Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div className="item_div">
              <Image
                src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${category.image}`}
                layout="fill"
                objectFit="cover"
                alt="img"
              />

              <div className="home_banner_text_area text-center ">
                <h2 className="banner_heading ">{category.name}r</h2>
                <p className="category_desc">{category.description}.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default CategoryCarousel;
