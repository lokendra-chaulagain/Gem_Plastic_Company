import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import styles from "../../styles/modules/Blog.module.css";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { format } from "timeago.js";
import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function Id() {
  const router = useRouter();
  const slug = router.query.id;

  const [singleBlog, setSingleBlog] = useState<any>([]);
  const fetchSingleBlog = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog?slug=${slug}`);

      setSingleBlog(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const [blogs, setBlogs] = useState([]);
  const fetchAllBlog = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog?category=${singleBlog.category}`);

      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    slug && fetchSingleBlog();
    fetchAllBlog();
  }, [slug, singleBlog.category]);

  return (
    <div className={`${styles.single_blog_wrapper} container matter text_color_blue`}>
      {singleBlog && (
        <>
          <h2 className="pt-5 pb-3">{singleBlog.title}</h2>
          <div className={styles.single_blog_image_div}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${singleBlog.image}`}
              layout="fill"
              objectFit="cover"
              alt="img"
            />
          </div>

          <div className="d-flex justify-content-between pt-2">
            <span className="cursor_pointer ">
              <span className="text_color_yellow fw-semibold">Author</span> : <span className="text-muted h6">Gem Plasticrafts</span>
            </span>
            <h6 className="small ">{format(singleBlog.createdAt)}</h6>
          </div>
          <h6 className="pt-2 text_color_yellow">
            Category : <span className="text_color_blue ">{singleBlog.category}</span>{" "}
          </h6>
          <h6 className="blog_description  pt-2">{parse(singleBlog.description ? singleBlog.description : "")}</h6>
        </>
      )}
      <div className="recent_blogs_section mt-5">
        <Link href={"/blog"}>
          <a className={`${styles.back_button} pt-5 pb-2 `}>
            <BiArrowBack className={`${styles.arrow_icon}`} /> Back
          </a>
        </Link>

        <p className="pt-5 pb-4 h3 ">Related Blogs</p>

        <div className="row">
          {blogs &&
            blogs.map((blog: any, index: any) => (
              <div
                key={index}
                className="col-4">
                <BlogCard blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}


