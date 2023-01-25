// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import FilterSection from "../../components/FilterSection";
// import HeroCarousel from "../../components/home/HeroCarousel";
// import OurServices from "../../components/OurServices";
// import ProductSection from "../../components/ProductSection";
// import SectionHeader from "../../components/SectionHeader";
// import { useForm } from "react-hook-form";
// import InfiniteScroll from "react-infinite-scroll-component";

// export default function Product() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const searchQuery = watch();
//   console.log(searchQuery);

//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1)
//   const fetchAllProduct = async () => {
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/forAdmin?page=${page}`);
//       setPage(page+1)
//       setProducts(
//         res.data.products.sort((p1, p2) => {
//           return new Date(p2.createdAt) - new Date(p1.createdAt);
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const [services, setServices] = useState([]);
//   const fetchAllServices = async () => {
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
//       setServices(res.data.allService);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(services);

//   const [banners, setBanners] = useState([]);
//   const fetchAllBanners = async () => {
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`);
//       setBanners(res.data.allBanner);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const [colors, setColors] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const fetchAll = async () => {
//     try {
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getAll`);
//       console.log(res.data);
//       setColors(res.data.colors);
//       setSizes(res.data.sizes);
//       setCategories(res.data.categories);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchAllProduct();
//     fetchAllServices();
//     fetchAllBanners();
//     fetchAll();
//   }, []);

//   return (
//     <div>
//       <div className="product_page_carousel_adjust">
//         <HeroCarousel banners={banners} />
//       </div>

//       {/* <FilterSection
//         colors={colors}
//         sizes={sizes}
//         categories={categories}
//       /> */}

//       <div className="container mb-4 mt-5">
//         <SectionHeader
//           title="All Products"
//           description="Our latest item collection of 2021d "
//         />

//         {/* <input
//           autoComplete="off"
//           type="email"
//           className="form-control w-25 py-2 nav_search rounded-1"
//           id="exampleInputEmail1"
//           placeholder="Search"
//           aria-describedby="emailHelp"
//           {...register("query", { required: true })}
//         /> */}
//         <InfiniteScroll
//           dataLength={products.length}
//           next={fetchAllProduct}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: "center" }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }>
//           <ProductSection products={products} />
//         </InfiniteScroll>
//       </div>
//       <OurServices services={services} />
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterSection from "../../components/FilterSection";
import HeroCarousel from "../../components/home/HeroCarousel";
import OurServices from "../../components/OurServices";
import ProductSection from "../../components/ProductSection";
import SectionHeader from "../../components/SectionHeader";
import { useForm } from "react-hook-form";

export default function Product() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const searchQuery = watch();
  console.log(searchQuery);

  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");
  const [categorySearch, setCategorySearch] = useState("");
  console.log(categorySearch)

  const [page, setPage] = useState(1);
  const [productTotalCount, setProductTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);
  // const [currentSize, setCurrentSize] = useState(5);

  const [products, setProducts] = useState([]);
  const [loki, setLoki] = useState([]);
  const fetchAllProduct = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/frontend?page=${page}&size=${5}&search=${searchInput}&sort=${sort}&category=${categorySearch}`);
      setProducts(res.data.allProduct);
      // setLoki(...loki,products)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(loki);

  const [services, setServices] = useState([]);
  const fetchAllServices = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`);
      setServices(res.data.allService);
    } catch (error) {
      console.log(error);
    }
  };

  const [banners, setBanners] = useState([]);
  const fetchAllBanners = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`);
      setBanners(res.data.allBanner);
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

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
    // setCurrentSize(currentSize + 5);
  };

  console.log(page);

  useEffect(() => {
    fetchAllProduct();
  }, [page, searchInput, sort,categorySearch]);

  useEffect(() => {
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

      <div className="filter_section_wrapper container">
        <div className="search_container row d-flex my-4">
          <input
            type="email"
            className="col form-control form_select_filter"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <button
            type="button"
            className="col-2 btn filter_search_button">
            Search
          </button>
        </div>

        <div className="drop_select_row d-flex row gap-2">
          <div className="col p-0 category_select_drop">
            <select
            onChange={(e)=>setCategorySearch(e.target.value)}
              className="form-select form_select_filter"
              aria-label="Category Select">
              <option
                className="form_select_filter_option "
                selected>
                ---Category---
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option
                    key={index}
                    value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>

          {/* <div className="col p-0 color_select_drop">
          <select
            className="form-select form_select_filter "
            aria-label="Price Select ">
            <option selected> ---Colors---</option>
            {colors &&
              colors.map((colo, index) => (
                <option
                  key={index}
                  value={color.name}>
                  {color.name}
                </option>
              ))}
          </select>
        </div> */}

          <div className="col p-0 size_select_drop">
            <select
              className="form-select form_select_filter"
              aria-label="Size Select ">
              <option selected> ---Sizes---</option>
              {sizes &&
                sizes.map((size, index) => (
                  <option
                    key={index}
                    value="1">
                    {size.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />

      <select
        onChange={(e) => setSort(e.target.value)}
        className="form-select custom_input_search w-25"
        aria-label="Sort Select">
        <option
          value="latest"
          selected>
          Latest
        </option>
        <option value="oldest">Oldest</option>
      </select>

      <div className="container mb-4 mt-5">
        <SectionHeader
          title="All Products"
          description="Our latest item collection of 2021d "
        />

        <ProductSection products={products} />
        <button
          type="button"
          onClick={handleNext}
          class="btn btn-link">
          Link
        </button>
      </div>
      <OurServices services={services} />
    </div>
  );
}
