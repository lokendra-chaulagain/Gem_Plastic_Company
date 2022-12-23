import React from "react";
import Image from "next/image";
import about from "../assets/aboutus.png";
import styles from "../styles/modules/Career.module.css";

const CareerHero = () => {
  return (
    <div>
      <div className={`${styles.career_hero_wrapper} row `}>
        <div className="col-12 col-lg-7 d-flex flex-column justify-content-center ">
          <h1 className={`${styles.career_hero_heading}`}>
            Wanted To <span className={styles.red_span}>be</span> <span className={styles.red_span}>Part</span> Of Our Team Apply <span className={styles.red_span}>Now</span> .
          </h1>
          <p className={styles.career_hero_para}>Quick and easy to use the most important thing for selling products on mobile!</p>
        </div>

        <div className="col-12 col-lg-5 pt-5 pt-lg-0">
          <div className={`${styles.hero_image_div}`}>
            <Image
              src={about}
              layout="fill"
              objectFit="cover"
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
