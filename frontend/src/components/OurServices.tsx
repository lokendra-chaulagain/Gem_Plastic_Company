import React from "react";
import styles from "../styles/modules/OurServices.module.css";
import SectionHeader from "./SectionHeader";

const OurServices = ({ services }: any) => {
  return (
    <div className={`${styles.our_services_wrapper} container`}>
      <SectionHeader
        title={"Our Services"}
        description={"Our latest item collection of 2021"}
      />
      <div className="row">
        {services &&
          services.map((service: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-3 pb-4 px-2  ">
              <div className={`${styles.service_card}`}>
                <p className="h4 pt-2">{service.title}</p>
                <p className="p pt-1">{service.subtitle}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurServices;
