import Image from "next/image";
import React from "react";
import styles from "../styles/modules/OurPartner.module.css";
import SectionHeader from "./SectionHeader";

const OurPartners = ({ partners }: any) => {
  return (
    <div className={`${styles.our_partner_wrapper} text_color_blue`}>
      <SectionHeader
        title={"Our Partners"}
        description={"Our latest item collection of 2021"}
      />
      <div className="row ">
        {partners &&
          partners.map((partner: any, index: any) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-xl-3 mb-4 mb-xl-0 ">
              <div className={`${styles.item} `}>
                <div className={styles.our_partner_avatar_div}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${partner.image}`}
                    layout="fill"
                    objectFit="cover"
                    alt="img"
                  />
                </div>

                <h3 className="mt-2">{partner.title}</h3>
                <p>{partner.subtitle}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurPartners;
