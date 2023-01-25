import React, { useEffect, useState, useContext } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import EventBannerTable from "../../components/eventBanner/EventBannerTable";
import Header from "../../components/Header";
import Api from "../../../service/Api.js";
let CallApi = new Api();

export default function EventBanner() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [eventBanners, setEventBanners] = useState([]);
  const [page, setPage] = useState(1);
  const [eventBannerTotalCount, setEventBannerTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const fetchAllEventBanner = async () => {
    try {
      let res = await CallApi.fetchData(`eventBanner?page=${page}&size=${5}`);
      setEventBanners(res.allEventBanner);
      setEventBannerTotalCount(res.totalEventBannerCount);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllEventBanner();
  }, [isUpdated, page]);

  const deleteEventBanner = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`eventBanner/${id}`);
      setIsUpdated(4);
      deleteSuccess();
      console.log("Delete success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <Header pageTitle={"Banner"} />
      <EventBannerTable
        setIsUpdated={setIsUpdated}
        eventBanners={eventBanners}
        deleteEventBanner={deleteEventBanner}
        eventBannerTotalCount={eventBannerTotalCount}
        currentCount={currentCount}
      />
      <div
        className="d-flex justify-content-end me-5"
        style={{ marginTop: "-40px" }}>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={currentCount > 5 ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination"
                onClick={handlePrev}>
                Previous
              </a>
            </li>

            <li className={eventBannerTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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
