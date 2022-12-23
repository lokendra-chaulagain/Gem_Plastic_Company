import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCard";
import SectionHeader from "../../components/SectionHeader";
import styles from "../../styles/modules/Career.module.css";
import CareerHero from "../../components/CareerHero";
import axios from "axios";
import Newsletter from "../../components/Newsletter";
import OurStandards from "../../components/OurStandards";

export default function Career() {
  const [vacancies, setVacancies] = useState([]);
  const fetchAllVacancies = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vacancy`);

      setVacancies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/standard`);
      setStandards(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllVacancies();
    fetchAllStandard();
  }, []);

  return (
    <>
      <div className="container">
        <div className={`${styles.career_page_wrapper}   text_color_blue`}>
          <CareerHero />

          <div className={`${styles.job_card_wrapper}`}>
            <SectionHeader
              title={"Our Recent Jobs Opening"}
              description={"Our latest item collection of 2021"}
            />
            <div className="row">
              {vacancies &&
                vacancies.map((vacancy: any, index: any) => (
                  <div
                    key={index}
                    className="col-12 col-md-6">
                    <JobCard vacancy={vacancy} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      {/* <OurStandards standards={standards} /> */}
    </>
  );
}
