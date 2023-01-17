import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import OurStandards from "../../components/OurStandards";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductSection from "../../components/ProductSection";
import SmallCategory from "../../components/SmallCategory";
import SectionHeader from "../../components/SectionHeader";

export default function Id() {
  const router = useRouter();
  const slug = router.query.id;

  const [category, setCategory] = useState([]);
  const fetchSingleCategory = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category?url=${slug}`);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/standard`);

      setStandards(res.data.allStandard);
    } catch (error) {
      console.log(error);
    }
  };

  const [catProducts, setCatProducts] = useState([]);
  const fetchCategoryProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?slug=${slug}`);
      setCatProducts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [categories, setCategories] = useState([]);
  const fetchAllCategory = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStandard();
    fetchCategoryProduct();
    fetchSingleCategory();
    fetchAllCategory();
  }, [router.query.id]);

  return (
    <div className="">
      <CategoryCarousel category={category} />

      <div className="mt-5  container">
        <SectionHeader
          title={`Category : ${slug}`}
          description={"Our latest item collection of 2021"}
        />
        <ProductSection
          products={catProducts}
          slug={slug}
        />
      </div>
      <SmallCategory categories={categories} />
      <OurStandards standards={standards} />
    </div>
  );
}
