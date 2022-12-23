import axios from "axios";
import React, { useEffect, useState } from "react";
import OurPartners from "../components/OurPartners";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";
import styles from "../styles/modules/About.module.css";

export default function about() {
  const [reviews, setReviews] = useState([]);
  const fetchAllReview = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/review`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [partners, setPartners] = useState([]);
  const fetchAllPartner = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/partner`);
      setPartners(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllReview();
    fetchAllPartner();
  }, []);

  return (
    <div className={`${styles.about_page_wrapper} container`}>
      <WhoWeAre />
      <WhyChooseUs />
      <Testimonial reviews={reviews} />
      <OurPartners partners={partners} />
    </div>
  );
}
