import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ReviewTable from "../../components/review/ReviewTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
import TableHeading from "../../components/TableHeading";
import AddReviewDialog from "../../components/review/AddReviewDialog";
let CallApi = new Api();

function Review() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");

  const deleteReview = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`review/${id}`);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };
  const [page, setPage] = useState(1);
  const [reviewTotalCount, setReviewTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const [reviews, setReviews] = useState([]);
  const fetchAllReview = async () => {
    try {
      let res = await CallApi.fetchData(`review?page=${page}&size=${5}&search=${searchInput}&sort=${sort}`);
      setReviews(res.allReview);
      setReviewTotalCount(res.totalReviewCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllReview();
  }, [isUpdated, page, searchInput, sort]);

  return (
    <>
      <Header pageTitle={"Reviews"} />

      <div className="d-flex align-items-center justify-content-between gap-4">
        <TableHeading heading={`All Reviews (${reviewTotalCount})`} />

        <input
          type="text"
          className="form-control w-50 custom_input_search"
          id="searchInput"
          placeholder="Search By Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="form-select custom_input_search w-50"
          aria-label="Sort Select">
          <option
            value="latest"
            selected>
            Latest
          </option>
          <option value="oldest">Oldest</option>
        </select>
        <AddReviewDialog setIsUpdated={setIsUpdated} />
      </div>

      <ReviewTable
        deleteReview={deleteReview}
        reviews={reviews}
        setIsUpdated={setIsUpdated}
        reviewTotalCount={reviewTotalCount}
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

            <li className={reviewTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Review;
