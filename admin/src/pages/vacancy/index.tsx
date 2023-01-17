import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import VacancyTable from "../../components/vacancy/VacancyTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Vacancy() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteVacancy = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`vacancy/${id}`);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [page, setPage] = useState(1);
  const [vacancyTotalCount, setVacancyTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const [vacancies, setVacancies] = useState([]);
  const fetchAllVacancy = async () => {
    try {
      let res = await CallApi.fetchData(`vacancy`);
      setVacancies(res);
      setIsUpdated(2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllVacancy();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Vacancy"} />
      <VacancyTable
        vacancies={vacancies}
        setIsUpdated={setIsUpdated}
        deleteVacancy={deleteVacancy}
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

            <li className={vacancyTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Vacancy;
