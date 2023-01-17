import React, { useEffect, useState, useContext } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import BannerTable from "../../components/banner/BannerTable";
import Header from "../../components/Header";
import Api from "../../../service/Api.js";
let CallApi = new Api();

export default function Banner() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [banners, setBanners] = useState([]);
  const [page, setPage] = useState(1);
  const [bannerTotalCount, setBannerTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const fetchAllBanner = async () => {
    try {
      let res = await CallApi.fetchData(`banner?page=${page}&size=${5}`);
      res && setBanners(res.allBanner);
      setBannerTotalCount(res.totalBannerCount);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBanner();
  }, [isUpdated, page]);

  console.log(banners);

  const deleteBanner = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`banner/${id}`);
      setIsUpdated(2);
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
      <BannerTable
        setIsUpdated={setIsUpdated}
        banners={banners}
        deleteBanner={deleteBanner}
        bannerTotalCount={bannerTotalCount}
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

            <li className={bannerTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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
