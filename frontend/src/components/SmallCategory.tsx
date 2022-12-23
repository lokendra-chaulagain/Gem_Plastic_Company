import React from "react";
import styles from "../styles/modules/ProductSection.module.css";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const SmallCategory = ({ categories }: any) => {
  return (
    <div className={`${styles.image_section} container `}>
      <SectionHeader
        title={"Explore Other Categories  "}
        description={"Our latest item collection of 2021"}
      />
      <div className="row ">
        {categories &&
          categories.map((category: any, index: any) => (
        <div className="col-12 col-lg-4 pb-5 ">
              <Link href={`/category/${category.url}`}>
                <div
                  key={index}
                  className="small_category_image_only_section_item  overflow-hidden rounded-0 ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${category.image}`}
                    layout="fill"
                    objectFit="cover"
                    alt="img"
                  />
                  <div className="only_image_text_div p-0">
                    <h2 className="only_image_text_div_heading ">{category.name}</h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SmallCategory;
