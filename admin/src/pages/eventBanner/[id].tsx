import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import EditBannerDialog from "../../components/category/EditBannerDialog";
import EditEventBannerDialog from "../../components/eventBanner/EditEventBannerDialog";
import Api from "../../../service/Api.js";
let CallApi = new Api();

const Id = () => {
  const { somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const [singleEventBanner, setSingleEventBanner] = useState({});
  const fetchSingleEventBanner = async () => {
    try {
      let res = await CallApi.EditData(`eventBanner/${id}`);
      setSingleEventBanner(res.data);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleEventBanner();
  }, [isUpdated, id]);

  return (
    <EditEventBannerDialog
      singleEventBanner={singleEventBanner}
      setSingleEventBanner={setSingleEventBanner}
      setIsUpdated={setIsUpdated}
      id={id}
    />
  );
};

export default Id;
