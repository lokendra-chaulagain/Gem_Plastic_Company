import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import Link from "next/link";
import { Button } from "@mui/material";
import AllProductsTable from "../../components/product/AllProductsTable";
import Api from "../../../service/Api.js";
import TableHeading from "../../components/TableHeading";
let CallApi = new Api();

function Product() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");

  const deleteProduct = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`product/${id}`);
      setIsUpdated(1);
      deleteSuccess();
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [page, setPage] = useState(1);
  const [productTotalCount, setProductTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(8);
  const [products, setProducts] = useState([]);
  const fetchAllProduct = async () => {
    try {
      let res = await CallApi.fetchData(`product/forAdmin?page=${page}&size=${8}&search=${searchInput}&sort=${sort}`);
      setProducts(res.products);
      setProductTotalCount(res.totalProductCount);
      setIsUpdated(5);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, [isUpdated, page, searchInput, sort]);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 8);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 8);
  };

  return (
    <>
      <Header pageTitle={"Product"} />

      <div className="d-flex align-items-center justify-content-between ">
        <TableHeading heading={`All Products (${productTotalCount})`} />

        <input
          type="text"
          className="form-control w-25 custom_input_search"
          id="searchInput"
          placeholder="Search By Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

        <Link href={"/product/create"}>
          <Button
            size="large"
            className="customCard px-4">
            Add New
          </Button>
        </Link>
      </div>

      <AllProductsTable
        products={products}
        deleteProduct={deleteProduct}
        productTotalCount={productTotalCount}
      />
      <div className="d-flex justify-content-end me-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={currentCount > 8 ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination"
                onClick={handlePrev}>
                Previous
              </a>
            </li>

            <li className={productTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination "
                onClick={handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Product;
