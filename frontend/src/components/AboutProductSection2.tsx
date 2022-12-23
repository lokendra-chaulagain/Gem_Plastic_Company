import React from "react";
import styles from "../styles/modules/ProductSection.module.css";
import demo from "../assets/banner4.jpg";
import Image from "next/image";

const AboutProductSection2 = () => {
  return (
    <div className={`${styles.about_product_section} container `}>
      <div className="row px-2 p-sm-0">
        <div className="col-12 col-lg-6 order-2 order-lg-1  mt-4 mt-xl-0  text_color_blue  ">
          <h2 className="about_section_heading">This is Demo Title here</h2>
          <p className="about_section_subheading">Lorem, ipsum dolor sit amet quaerat, tempora soluta qui quasi facere itaque nam ipsam fuga.</p>
          <p className="pt-4 about_section_desc">
            <span className="pe-3 h5 fw-bold opacity-75">1.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi consequuntur vitae sed aspernatur facere praesentium.
          </p>
          <p className="pt-4 about_section_desc">
            <span className="pe-3 h5 fw-bold opacity-75">2.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi consequuntur vitae sed aspernatur facere praesentium.
          </p>
          <p className="pt-4 about_section_desc">
            <span className="pe-3 h5 fw-bold opacity-75">3.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi consequuntur vitae sed aspernatur facere praesentium.
          </p>
        </div>

        <div className="col-12 col-lg-6 position-relative  order-1 about_product_img_div overflow-hidden rounded-3  ">
          <Image
            src={demo}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProductSection2;
