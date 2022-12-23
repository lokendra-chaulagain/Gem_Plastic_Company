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
    </>
  );
}

export default Vacancy;
