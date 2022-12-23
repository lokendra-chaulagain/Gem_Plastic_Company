import React from "react";
import styles from "../styles/modules/Blog.module.css";
import { format } from "timeago.js";
import Link from "next/link";
import parse from "html-react-parser";

const JobCard = ({ vacancy }: any) => {
  return (
    <div className="white_wrapper px-2 pb-5">
      {vacancy&&<div className="row gap-3">
        <div className={`${styles.blog_card} col px-0 py-4 px-3`}>
          <div className="d-flex justify-content-between">
            <h4 className="h4">{vacancy.position}</h4>
            <span className="small text_muted_level_1">{format(vacancy.createdAt)}</span>
          </div>

          <div className="d-flex justify-content-between py-2">
            {/* <p>{vacancy.jobType}</p> */}
            {/* <p> {vacancy.location} </p> */}
            <span className="small text_muted_level_2 ">Qualification : {vacancy.qualification}</span>
          </div>
          <p className="global_para blog_description cutoff_text">{parse(vacancy.description)}</p>
          <Link href={`/career/${vacancy.url}`}>
            <button
              className="rounded_pill_button mt-4 "
              type="button">
              Read
            </button>
          </Link>
        </div>
      </div>}
    </div>
  );
};

export default JobCard;
