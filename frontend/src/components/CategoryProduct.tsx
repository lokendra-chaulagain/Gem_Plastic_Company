import React from "react";
import styles from "../styles/modules/CategoryProduct.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import demo from "../assets/demo.jpg";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const CategoryProduct = () => {
  const items = [
    {
      name: "1 .Dem0 Name This",
      price: "500",
    },

    {
      name: "2 .Dem0 Name This",
      price: "500",
    },

    {
      name: "3 .Dem0 Name This",
      price: "500",
    },

    {
      name: "4 .Dem0 Name This",
      price: "500",
    },

    {
      name: "5 .Dem0 Name This",
      price: "500",
    },

    {
      name: "6 .Dem0 Name This",
      price: "500",
    },

    {
      name: "1 .Dem0 Name This",
      price: "500",
    },
    {
      name: "7 .Dem0 Name This",
      price: "500",
    },
  ];

  return (
    <div className={`${styles.category_product} container`}>
      <SectionHeader
        title={"Categories Of Our Product"}
        description={"Our latest item collection of 2021"}
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          1500: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          500: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper">
        {items &&
          items.map((item: any, index: any) => (
            <SwiperSlide
              key={index}
              className={`${styles.carousel_item_div}`}>
              <div className={styles.carousel_item}>
                <div className={styles.love_icon_div}>
                  <AiOutlineHeart />
                </div>
                <Image
                  src={demo}
                  width={440}
                  height={250}
                  alt=" "
                />
                <div className="d-flex flex-column text_color_white align-items-center">
                  <h5>{item.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CategoryProduct;
