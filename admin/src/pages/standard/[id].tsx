import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import EditStandardTable from "../../components/standard/EditStandardTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

const Id = () => {
  const { somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singleStandard, setSingleStandard] = useState({});
  const fetchSingleStandard = async (id: any) => {
    try {
      let res = await CallApi.EditData(`standard/${id}`);

      setSingleStandard(res);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchSingleStandard(id);
  }, [isUpdated, id]);

  return (
    <>
      <EditStandardTable
        singleStandard={singleStandard}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
};

export default Id;
