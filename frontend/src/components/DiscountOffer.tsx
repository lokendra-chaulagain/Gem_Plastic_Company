import Image from "next/image";
import React from "react";
import styles from "../styles/modules/LatestProduct.module.css";
import Announcement from "./Announcement";

const DiscountOffer = ({ eventBanners }: any) => {
  return (
    <div className="container">
      <div className="row ">
        <Announcement />

        {eventBanners &&
          eventBanners.map((eventBanner: any, index: any) => (
            <div className="col-12 col-md-6">
              <div
                key={index}
                className={`${styles.discount_img}  `}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${eventBanner.image}`}
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DiscountOffer;
