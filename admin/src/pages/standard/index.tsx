import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import StandardTable from "../../components/standard/StandardTable";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Standard() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

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

  const [standards, setStandards] = useState([]);
  const fetchAllStandard = async () => {
    try {
      let res = await CallApi.fetchData(`standard`);

      setStandards(res);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllStandard();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Standards"} />
      <StandardTable
        standards={standards}
        deleteStandard={deleteStandard}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Standard;
