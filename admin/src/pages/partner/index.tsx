import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PartnerTable from "../../components/partner/PartnerTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Partner() {
  const [partners, setPartners] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);
  const [page, setPage] = useState(1);
  const [partnerTotalCount, setPartnerTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const fetchAllPartner = async () => {
    try {
      let res = await CallApi.fetchData(`partner?page=${page}&size=${5}`);
      setPartners(res.allPartner);
      setPartnerTotalCount(res.totalPartnerCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePartner = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`partner/${id}`);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPartner();
  }, [isUpdated, page]);

  return (
    <>
      <Header pageTitle={"Partners"} />
      <PartnerTable
        deletePartner={deletePartner}
        partners={partners}
        setIsUpdated={setIsUpdated}
        partnerTotalCount={partnerTotalCount}
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

            <li className={partnerTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Partner;
