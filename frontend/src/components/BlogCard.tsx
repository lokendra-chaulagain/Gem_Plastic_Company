import React from "react";
import styles from "../styles/modules/Blog.module.css";
import Image from "next/image";
import { format } from "timeago.js";
import parse from "html-react-parser";
import Link from "next/link";

const BlogCard = ({ blog }: any) => {
  return (
    <div className="white_wrapper px-2 pb-5">
      <div className="row gap-3">
        <div className={`${styles.blog_card} col px-0  pb-3`}>
          <div className={`${styles.blog_card_img_div}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${blog.image}`}
              layout="fill"
              objectFit="cover"
              alt="img"
            />
          </div>

          <div className="except_image_wrapper px-2 pt-2">
            <div className="d-flex justify-content-between">
              <span className="cursor_pointer text_muted_level_1">
                <span className="text_color_yellow fw-semibold">Author</span> : Gem Plasticrafts
              </span>
              <span className="small text_muted_level_2">{format(blog.createdAt)}</span>
            </div>
            <p className="pt-3 h5">{blog.title}</p>
            <h6 className="blog_description text_muted_level_1 pt-2 cutoff_text">{parse(blog.description ? blog.description : "")}</h6>

            <Link href={`/blog/${blog.url}`}>
              <button
                className="rounded_pill_button mt-4 "
                type="button">
                Read
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
