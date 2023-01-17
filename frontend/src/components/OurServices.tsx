import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/modules/OurServices.module.css";
import SectionHeader from "./SectionHeader";

const OurServices = ({ services }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      // history.push('/login');
      console.log("No access token");
    }
    // axios.get('/api/user', { headers: { authorization: `Bearer ${accessToken}` } })
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user`, { headers: { authorization: `Bearer ${accessToken}` } })
      .then((res) => console.log(res) )
      .catch((err) => {
        console.error(err);
        // history.push("/login");
      });
  }, []);
  console.log(user)

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
