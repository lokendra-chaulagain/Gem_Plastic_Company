import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import OurStandards from "../../components/OurStandards";
import ProductSection from "../../components/ProductSection";
import SectionHeader from "../../components/SectionHeader";
import SingleProductSection from "../../components/SingleProductSection";
import SmallCategory from "../../components/SmallCategory";

export default function ID() {
  const router = useRouter();
  const slug = router.query.id;

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/standard`);
      setStandards(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [singleProduct, setSingleProduct] = useState<any>({});
  const [singleProductId, setSingleProductId] = useState<any>({});
  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?url=${slug}`);
      setSingleProduct(res.data[0]);
      setSingleProductId(res.data[0]._id);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(singleProductId);

  const [categories, setCategories] = useState([]);
  const fetchAllCategory = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category`);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [singleCategoryUrl, setSingleCategoryUrl] = useState<any>([]);
  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/${singleProduct.category}`);
        setSingleCategoryUrl(res.data.url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCategory();
  }, [singleProduct]);

  const [catProducts, setCatProducts] = useState([]);
  const fetchCategoryProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?slug=${singleCategoryUrl}`);
      setCatProducts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStandard();
    fetchSingleProduct();
    fetchAllCategory();
    fetchCategoryProduct();
  }, [slug, singleCategoryUrl]);

  return (
    <div className="container matter ">
      <SingleProductSection
        singleProduct={singleProduct}
        singleCategoryUrl={singleCategoryUrl}
      />
      <div className="mt-5">
        <SectionHeader
          title="Similar Products"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered "
        />
        <ProductSection products={catProducts} />
      </div>
      <SmallCategory categories={categories} />
      <OurStandards standards={standards} />
    </div>
  );
}
