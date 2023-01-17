import React, { useEffect, useState, useContext } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import BannerTable from "../../components/banner/BannerTable";
import Header from "../../components/Header";
import Api from "../../../service/Api.js";
import AddBannerDialog from "../../components/banner/AddBannerDialog";
import TableHeading from "../../components/TableHeading";
let CallApi = new Api();

export default function Banner() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [banners, setBanners] = useState([]);
  const [page, setPage] = useState(1);
  const [bannerTotalCount, setBannerTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");

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
      let res = await CallApi.fetchData(`banner?page=${page}&size=${5}&search=${searchInput}&sort=${sort}`);
      res && setBanners(res.allBanner);
      setBannerTotalCount(res.totalBannerCount);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBanner();
  }, [isUpdated, page, searchInput, sort]);

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

      <div className="d-flex align-items-center justify-content-between gap-4 ">
        <TableHeading heading={`All Banners (${bannerTotalCount})`} />

        <input
          type="text"
          className="form-control w-50 custom_input_search"
          id="searchInput"
          placeholder="Search By Email"
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

        <AddBannerDialog setIsUpdated={setIsUpdated} />
      </div>

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
