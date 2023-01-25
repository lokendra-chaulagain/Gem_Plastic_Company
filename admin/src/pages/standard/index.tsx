import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import StandardTable from "../../components/standard/StandardTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
import TableHeading from "../../components/TableHeading";
import AddStandardDialog from "../../components/standard/AddStandardDialog";
let CallApi = new Api();

function Standard() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");

  const deleteStandard = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`standard/${id}`);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Standard deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [page, setPage] = useState(1);
  const [standardTotalCount, setStandardTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      let res = await CallApi.fetchData(`standard?page=${page}&size=${5}&search=${searchInput}&sort=${sort}`);
      setStandards(res.allStandard);
      setStandardTotalCount(res.totalStandardCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllStandard();
  }, [isUpdated, page, searchInput, sort]);

  return (
    <>
      <Header pageTitle={"Standards"} />

      <div className="d-flex align-items-center justify-content-between gap-4 ">
        <TableHeading heading={`All Standards (${standardTotalCount})`} />

        <input
          type="text"
          className="form-control w-50 custom_input_search"
          id="searchInput"
          placeholder="Search By Title"
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
        <AddStandardDialog setIsUpdated={setIsUpdated} />
      </div>

      <StandardTable
        standards={standards}
        deleteStandard={deleteStandard}
        setIsUpdated={setIsUpdated}
        standardTotalCount={standardTotalCount}
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

            <li className={standardTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Standard;
