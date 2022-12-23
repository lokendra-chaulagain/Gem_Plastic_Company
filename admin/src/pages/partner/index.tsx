import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import PartnerTable from "../../components/partner/PartnerTable";
import axios from "axios";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Partner() {
  const [partners, setPartners] = useState([]);
  const [isUpdated, setIsUpdated] = useState(0);

  const fetchAllPartner = async () => {
    try {
      let res = await CallApi.fetchData(`partner`);
      setPartners(res);
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
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Partners"} />
      <PartnerTable
        deletePartner={deletePartner}
        partners={partners}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Partner;
