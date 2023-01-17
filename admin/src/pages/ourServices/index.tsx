import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import OurServicesTable from "../../components/ourServices/OurServicesTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Portfolio() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteService = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`service/${id}`);

      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [page, setPage] = useState(1);
  const [serviceTotalCount, setServiceTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const [services, setServices] = useState([]);
  const fetchAllService = async () => {
    try {
      let res = await CallApi.fetchData(`service?page=${page}&size=${5}`);
      setServices(res.allService);
      setServiceTotalCount(res.totalServiceCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllService();
  }, [isUpdated, page]);

  return (
    <>
      <Header pageTitle={"Our Services"} />
      <OurServicesTable
        services={services}
        deleteService={deleteService}
        setIsUpdated={setIsUpdated}
        serviceTotalCount={serviceTotalCount}
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

            <li className={serviceTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Portfolio;
