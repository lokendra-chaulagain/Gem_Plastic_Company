import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ReviewTable from "../../components/review/ReviewTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Review() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

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
      let res = await CallApi.fetchData(`review?page=${page}&size=${5}`);
      setReviews(res.allReview);
      setReviewTotalCount(res.totalReviewCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllReview();
  }, [isUpdated, page]);

  return (
    <>
      <Header pageTitle={"Reviews"} />
      <ReviewTable
        deleteReview={deleteReview}
        reviews={reviews}
        setIsUpdated={setIsUpdated}
        reviewTotalCount={reviewTotalCount}
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
