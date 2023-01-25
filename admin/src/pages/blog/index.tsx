import React, { useContext, useEffect, useState } from "react";
import BlogTable from "../../components/blog/BlogTable";
import Header from "../../components/Header";
import Link from "next/link";
import { Button } from "@mui/material";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
import TableHeading from "../../components/TableHeading";
let CallApi = new Api();

function Blog() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");

  const [page, setPage] = useState(1);
  const [blogTotalCount, setBlogTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const fetchAllBlogs = async () => {
    try {
      let res = await CallApi.fetchData(`blog?page=${page}&size=${5}&search=${searchInput}&sort=${sort}`);
      setBlogs(res);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, [isUpdated, searchInput, sort]);

  const deleteBlog = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`blog/${id}`);
      setIsUpdated(4);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <Header pageTitle={"Blogs"} />

      <div className="d-flex align-items-center justify-content-between ">
        <TableHeading heading={"All Blogs "} />

        <input
          type="text"
          className="form-control w-25 custom_input_search"
          id="searchInput"
          placeholder="Search By Email"
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
        <Link href={"/blog/create"}>
          <Button
            size="large"
            className="customCard px-4">
            Add New
          </Button>
        </Link>
      </div>

      <BlogTable
        blogs={blogs}
        deleteBlog={deleteBlog}
        currentCount={currentCount}
      />
      <div className="d-flex justify-content-end me-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={currentCount > 5 ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination"
                onClick={handlePrev}>
                Previous
              </a>
            </li>

            <li className={blogTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Blog;
