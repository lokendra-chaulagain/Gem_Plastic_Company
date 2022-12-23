import Image from "next/image";
import React, { useEffect, useState } from "react";
import demo1 from "../../../assets/demo.jpg";
import styles from "../../../styles/modules/Blog.module.css";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import JobCard from "../../../components/JobCard";
import parse from "html-react-parser";

export default function Index() {
  const router = useRouter();
  const slug = router.query.id;

  const [vacancies, setVacancies] = useState([]);
  const fetchAllVacancies = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vacancy`);
      setVacancies(res.data);
      console.log(res.data);
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

  const [singleVacancy, setSingleVacancy] = useState<any>([]);
  const fetchSingleVacancy = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/vacancy?slug=${slug}`);
      setSingleVacancy(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleVacancy();
    fetchAllVacancies();
    fetchAllStandard();
  }, [slug]);

  return (
    <div>
      {singleVacancy && (
        <div className={`${styles.single_blog_wrapper} container matter text_color_blue`}>
          <h2 className="pt-5 pb-2 ">This is Title of the Blog Post</h2>
          <div className={styles.single_blog_image_div}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${singleVacancy.image}`}
              layout="fill"
              objectFit="cover"
              alt="img"
            />
          </div>

          <h6 className="d-flex justify-content-lg-between px-2">
            <span className="cursor_pointer ">
              <span className="text_color_yellow fw-semibold">Author</span> : <span className="text-muted h6">Gem Plasticrafts</span>
            </span>
            <span>5 Days ago </span>
          </h6>
          <h6 className="blog_description  pt-2">{parse(singleVacancy.description ? singleVacancy.description : " ")}</h6>

          <div className="d-flex align-items-center justify-content-end my-3">
            <Link href={`/career/${slug}/apply`}>
              <button
                className="rounded_pill_button "
                type="button">
                Apply
              </button>
            </Link>
          </div>

          <div className="recent_blogs_section mt-5">
            <Link href={"/career"}>
              <a className={`${styles.back_button} pt-5 pb-2 `}>
                <BiArrowBack className={`${styles.arrow_icon}`} /> Back
              </a>
            </Link>

            <h2 className="pt-5 pb-2 ">Related Jobs Post</h2>

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
      )}
    </div>
  );
}
