import React from "react";
import Image from "next/image";
import demo from "../assets/starLine.webp";

const SectionHeader = ({ title, description }: any) => {
  return (
    <div className="d-flex flex-column align-items-center text_color_blue gap-2 pb-4">
      <h2 className="p-0 m-0 h2 fw-semibold text_muted_heading">{title}</h2>
      <p className="col-8 text-center p-0 section_header_description text-muted ">{description}</p>
      <div className="section_header_img_div">
        <Image
          src={demo}
          layout="fill"
          objectFit="cover"
          alt=" "
        />
      </div>
    </div>
  );
};

export default SectionHeader;
