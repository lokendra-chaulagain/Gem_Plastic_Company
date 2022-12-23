import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import HeroCarousel from "../../components/home/HeroCarousel";
import OurServices from "../../components/OurServices";
import ProductSection from "../../components/ProductSection";
import SectionHeader from "../../components/SectionHeader";
import { useForm } from "react-hook-form";

export default function Product() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const searchQuery=watch()
  console.log(searchQuery)




  const [products, setProducts] = useState([]);
  const fetchAllProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product`);
      setProducts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [services, setServices] = useState([]);
  const fetchAllServices = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(services);

  const [banners, setBanners] = useState([]);
  const fetchAllBanners = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`);
      setBanners(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const fetchAll = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAll`);
      console.log(res.data);
      setColors(res.data.colors);
      setSizes(res.data.sizes);
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
    fetchAllServices();
    fetchAllBanners();
    fetchAll();
  }, []);

  return (
    <div>
      <div className="product_page_carousel_adjust">
        <HeroCarousel banners={banners} />
      </div>







      {/* <FilterSection
        colors={colors}
        sizes={sizes}
        categories={categories}
      /> */}

      <div className="container mb-4 mt-5">
        <SectionHeader
          title="All Products"
          description="Our latest item collection of 2021d "
        />

<input
          autoComplete="off"
          type="email"
          className="form-control w-25 py-2 nav_search rounded-1"
          id="exampleInputEmail1"
          placeholder="Search"
          aria-describedby="emailHelp"
          {...register("query", { required: true })}
        />
        <ProductSection products={products} />
      </div>
      <OurServices services={services} />
    </div>
  );
}
