import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/modules/Nav.module.css";
import Image from "next/image";
import logo from "../assets/gem_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { HiInformationCircle } from "react-icons/hi";
import { HiTemplate } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { FaSitemap } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const Navbar = () => {
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
    fetchAllCategory();
  }, []);

  const router = useRouter();
  const route = router.pathname.split("/")[1];

  return (
    <nav className={`${styles.nav_bar} navbar navbar-expand-lg`}>
      <div className="container">
        <Image
          src={logo}
          width={150}
          height={60}
          alt=" "
        />

        {/* <input
          autoComplete="off"
          type="email"
          className="form-control w-25 py-2 nav_search rounded-1"
          id="exampleInputEmail1"
          placeholder="Search"
          aria-describedby="emailHelp"
        /> */}

        <div
          className="d-flex gap-5 d-none d-lg-block "
          id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <Link href={"/"}>
            <a
              type="button"
              className={`${route == "" ? styles.nav_active : styles.nav_link} pe-3`}>
              Home
            </a>
          </Link>

          <a
            type="button"
            className={`${styles.nav_link} dropdown-toggle px-3`}
            data-bs-toggle="dropdown">
            Category
          </a>

          <div className={`${styles.nav_drop_large}  dropdown-menu`}>
            <div className="row d-flex align-items-center justify-content-center gap-4">
              {categories &&
                categories.map((category: any, index: any) => (
                  <Link href={`/category/${category.url}`}>
                    <div
                      key={index}
                      className={`${styles.nav_category_item} col-2 px-0 pb-2`}>
                      <div className={`${styles.nav_category_item_img}  `}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL_SECURE}/${category.image}`}
                          layout="fill"
                          objectFit="cover"
                          alt="img"
                        />
                      </div>
                      <h6 className="pt-2 text-center h6 pb-0 mb-0">{category.name}</h6>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          <Link href={"/about"}>
            <a
              type="button"
              className={`${route == "about" ? styles.nav_active : styles.nav_link} px-3`}>
              About
            </a>
          </Link>

          <Link href={"/product"}>
            <a
              type="button"
              className={`${route == "product" ? styles.nav_active : styles.nav_link} px-3`}>
              Products
            </a>
          </Link>

          <Link href={"/contact"}>
            <a
              type="button"
              className={`${route == "contact" ? styles.nav_active : styles.nav_link} ps-3`}>
              Contact
            </a>
          </Link>
        </div>
        <button
          typeof="button"
          className="navbar-toggler d-flex d-block d-lg-none m-0 p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <GiHamburgerMenu className={`${styles.hamburger_icon} `} />
          &#8203;
        </button>
        <div
          className={`${styles.off_canvas_wrapper} offcanvas offcanvas-end d-lg-none`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title fw-bold"
              id="offcanvasNavbarLabel">
              Gem Plastic
            </h5>

            <IoMdClose
              className={`${styles.off_canvas_button_close} btn-close m-0 p-0`}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-5">
              <Link href={"/"}>
                <div
                  className={`${route == "" ? styles.off_canvas_nav_active : styles.off_canvas_nav_link}   d-flex align-items-center gap-2 pb-3 `}
                  data-bs-dismiss="offcanvas">
                  <ImHome />
                  Home
                </div>
              </Link>
              <Link href={"/product"}>
                <div
                  className={`${route == "products" ? styles.off_canvas_nav_active : styles.off_canvas_nav_link}  d-flex align-items-center gap-2  pb-3 `}
                  data-bs-dismiss="offcanvas">
                  <HiTemplate />
                  Products
                </div>
              </Link>

              <div className="dropdown">
                <button
                  type="button"
                  className={`${styles.category_off_canvas_dropdown} dropdown-toggle p-0 pb-3 `}
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <FaSitemap className="me-2" />
                  Categories
                </button>
                <ul className={`${styles.off_canvas_category_drop} dropdown-menu mb-3`}>
                  {categories &&
                    categories.map((category: any, index: any) => (
                      <li
                        key={index}
                        data-bs-dismiss="offcanvas">
                        <Link href={`/category/${category.url}`}>
                          <a
                            className={`${styles.dropdown_item} dropdown-item `}
                            href="#">
                            {category.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <Link href={"/about"}>
                <div
                  className={`${route == "about" ? styles.off_canvas_nav_active : styles.off_canvas_nav_link}  d-flex align-items-center gap-2 pb-3 `}
                  data-bs-dismiss="offcanvas">
                  <HiInformationCircle />
                  About
                </div>
              </Link>

              <Link href={"/contact"}>
                <div
                  className={`${route == "contact" ? styles.off_canvas_nav_active : styles.off_canvas_nav_link}  d-flex align-items-center gap-2 pb-3 `}
                  data-bs-dismiss="offcanvas">
                  <GrMail />
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
