import axios from "axios";
import React, { useEffect, useState } from "react";
import AboutProductSection from "../components/AboutProductSection";
import AboutProductSection2 from "../components/AboutProductSection2";
import DiscountOffer from "../components/DiscountOffer";
import HeroCarousel from "../components/home/HeroCarousel";
import ImageSection from "../components/ImageSection";
import Newsletter from "../components/Newsletter";
import OurServices from "../components/OurServices";
import OurStandards from "../components/OurStandards";
import ProductSection from "../components/ProductSection";
import SectionHeader from "../components/SectionHeader";

export default function Index() {
  const [banners, setBanners] = useState([]);
  const fetchAllBanner = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`);
      setBanners(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [eventBanners, setEventBanners] = useState([]);
  const fetchAllEventBanner = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/eventBanner`);
      setEventBanners(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [services, setServices] = useState([]);
  const fetchAllService = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const fetchAllFeaturedProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?featured=1`);
      setFeaturedProducts(
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

  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const fetchAllTopSellingProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product?topSelling=1`);
      setTopSellingProducts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
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

  useEffect(() => {
    fetchAllBanner();
    fetchAllService();
    fetchAllEventBanner();
    fetchAllFeaturedProduct();
    fetchAllCategory();
    fetchAllTopSellingProduct();
    fetchAllStandard();
  }, []);

  return (
    <div className="matter">
      <HeroCarousel banners={banners} />
      <OurServices services={services} />
      <DiscountOffer eventBanners={eventBanners} />

      <div className="mt-5 pt-5 container">
        <SectionHeader
          title={"Featured Products"}
          description={"Our latest item collection of 2021"}
        />
        <ProductSection products={featuredProducts} />
      </div>

      <AboutProductSection />
      <ImageSection categories={categories} />

      <div className="mt-5 pt-5 container">
        <SectionHeader
          title={"Top Selling Products"}
          description={"Our latest item collection of 2021"}
        />
        <ProductSection products={topSellingProducts} />
      </div>

      <AboutProductSection2 />
      <Newsletter />
      <OurStandards standards={standards} />
    </div>
  );
}
