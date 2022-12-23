import React from "react";
import styles from "../styles/modules/About.module.css";
import Image from "next/image";
import demo from "../assets/starLine.webp";
import { BsBag } from "react-icons/bs";
import demo1 from "../assets/chooseUS.jpg";

const WhyChooseUs = () => {
  return (
    <>
      {/* ------------------------------- */}
      <div className="d-flex flex-column align-items-center text_color_blue mt-5">
      <h1 className="h2 fw-semibold  text_muted_heading mt-5">WHY CHOOSE US</h1>
        <p>Choose a brand with the best quality products and services you can rely on.</p>
        <Image
          src={demo}
          width={300}
          height={25}
          alt=" "
        />
      </div>
      {/* ---------------------------------- */}

      <div className="row pt-5">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-column align-items-center  align-items-xl-end text_color_blue">
            <BsBag
              size={35}
              className={`${styles.about_icon}`}
            />
            <h4 className="pt-3 text_muted_heading">Durable Products</h4>
            <p className="pt-2 ps-0 ps-md-5 text-center text-md-start">Gem Plastic has been providing long-lasting plastic housewares for a long time. The products are manufactured as per the customer's demands.</p>
          </div>

          <div className="d-flex flex-column align-items-center  align-items-xl-end text_color_blue pt-5">
            <BsBag
              size={35}
              className={`${styles.about_icon}`}
            />
            <h4 className="pt-3 text_muted_heading">Quality and Reliability</h4>
            <p className="pt-2 ps-0 ps-md-5 text-center text-md-start">We promise to deliver trustworthy and best-quality products that will be used in the everyday life of the people.</p>
          </div>
        </div>

        <div className="col-12 d-none d-xl-block col-xl-4">
          <Image
            src={demo1}
            width={700}
            height={700}
            alt=" "
          />
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="d-flex flex-column align-items-center  align-items-xl-start pt-5 pt-md-0   text_color_blue">
            <BsBag
              size={35}
              className={`${styles.about_icon}`}
            />
            <h4 className="pt-3 text_muted_heading">Cost- Effective</h4>
            <p className="pt-2 ps-0 ps-md-5 text-center text-md-start">Besides the quality and reliability, we have been working to make the products cost-effective so that everyone can afford our products.</p>
          </div>

          <div className="d-flex flex-column align-items-center  align-items-xl-start text_color_blue pt-5">
            <BsBag
              size={35}
              className={`${styles.about_icon} `}
            />
            <h4 className="pt-3 text_muted_heading">Easily Available Service</h4>
            <p className="pt-2 ps-0 ps-md-5 text-center text-md-start">The products of Gem Plastics is easily available in most places in Nepal. Our Houseware products are Highly needed and demanded.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
