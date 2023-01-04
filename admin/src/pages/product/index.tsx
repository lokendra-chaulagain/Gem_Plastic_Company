import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import AllProductsTable from "../../components/product/AllProductsTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Product() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

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
      let res = await CallApi.fetchData(`product/forAdmin?page=${page}&size=${8}`);
      setProducts(res.products);
      setProductTotalCount(res.totalProductCount);
      setIsUpdated(5);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, [isUpdated, page]);

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
      <AllProductsTable
        products={products}
        deleteProduct={deleteProduct}
      />

      <div
        className="d-flex justify-content-end me-5"
        style={{ marginTop: "-40px" }}>
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
