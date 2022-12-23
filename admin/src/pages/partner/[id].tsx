import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import EditPartnerTable from "../../components/partner/EditPartnerTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

const Id = () => {
  const { somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singlePartner, setSinglePartner] = useState({});
  const fetchSinglePartner = async () => {
    try {
      let res = await CallApi.EditData(`partner/${id}`);
      setSinglePartner(res.data);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSinglePartner();
  }, [isUpdated, id]);

  return (
    <>
      <EditPartnerTable
        singlePartner={singlePartner}
        setIsUpdated={setIsUpdated}
        id={id}
      />
    </>
  );
};

export default Id;
