import React, { useContext, useEffect, useState } from "react";
import CmsTable from "../../components/cms/CmsTable";
import axios from "axios";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Cms() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [cmsData, setCmsData] = useState([]);

  const fetchCmsData = async () => {
    try {
      let res = await CallApi.fetchData(`cms`);
      setCmsData(res[0]);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCms = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`cms/${id}`);

      setIsUpdated(9);
      deleteSuccess();
      console.log("Delete success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchCmsData();
  }, [isUpdated]);

  return (
    <>
      <CmsTable
        cmsData={cmsData}
        deleteCms={deleteCms}
      />
    </>
  );
}

export default Cms;
