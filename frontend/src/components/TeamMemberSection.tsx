import React from "react";
import demo from "../assets/demo.jpg";
import Image from "next/image";
import styles from "../styles/modules/Team.module.css";
import SectionHeader from "./SectionHeader";

export default function TeamMemberSection() {
  const items = [
    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },
    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },

    {
      name: "Demo Name This",
      position: "CEO of the Company",
    },
  ];
  return (
    <div className={`${styles.teamMember_section}`}>
      <SectionHeader
        title={"Team Members"}
        description={"Our latest item collection of 2021"}
      />

      <div className="col-4">
        <div className={`${styles.wrapper_div} `}>
          <div className={`${styles.bg_div}`}>
            <h5 className="py-2 ps-3">Lokendra Chaulagain</h5>
            <h5 className={`${styles.vertical_text} col-12  m-0`}>LokendraChaulagain</h5>

            <div className={`${styles.front_div}`}>
              <div className={`${styles.count_div}`}>01</div>
              {/* <Image
              src={demo}
              width={320}
              height={430}
              alt=" "
              objectFit="cover"
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
