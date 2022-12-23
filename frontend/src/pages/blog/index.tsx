import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import styles from "../../styles/modules/Blog.module.css";
import SectionHeader from "../../components/SectionHeader";
import BlogHero from "../../components/BlogHero";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const fetchAllBlog = async () => {
    try {
      const res = await axios.get (`${process.env.NEXT_PUBLIC_API_URL}/blog`);
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlog();
  }, []);

  return (
    <div className={`${styles.blog_page_wrapper} container`}>
      <BlogHero />

      <div className={`${styles.blog_card_wrapper}`}></div>

      <SectionHeader
        title={"Our Recent Blogs"}
        description={"Our latest item collection of 2021"}
      />

      <div className="row ">
        {blogs &&
          blogs.map((blog: any, index: any) => (
            <div
              key={index}
              className="col-12 col-md-6 col-xl-4">
              <BlogCard blog={blog} />
            </div>
          ))}
      </div>
    </div>
  );
}
