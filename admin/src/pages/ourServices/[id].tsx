import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import EditOurServiceTable from "../../components/ourServices/EditOurServiceTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

const Id = () => {
  const { somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singleService, setSingleService] = useState({});
  const fetchSingleService = async (id: any) => {
    try {
      let res = await CallApi.EditData(`service/${id}`);

      setSingleService(res);
      setIsUpdated(1);
      console.log("Update success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchSingleService(id);
  }, [isUpdated, id]);

  return (
    <EditOurServiceTable
      singleService={singleService}
      setIsUpdated={setIsUpdated}
      id={id}
    />
  );
};

export default Id;
