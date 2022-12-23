import React, { useEffect, useState, useContext } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import EventBannerTable from "../../components/eventBanner/EventBannerTable";
import Header from "../../components/Header";
import Api from "../../../service/Api.js";
let CallApi = new Api();

export default function EventBanner() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const [eventBanners, setEventBanners] = useState([]);
  const fetchAllEventBanner = async () => {
    try {
      let res = await CallApi.fetchData(`eventBanner`);
      setEventBanners(res);
      setIsUpdated(1);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllEventBanner();
  }, [isUpdated]);

  const deleteEventBanner = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`eventBanner/${id}`);
      setIsUpdated(4);
      deleteSuccess();
      console.log("Delete success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  return (
    <>
      <Header pageTitle={"Banner"} />
      <EventBannerTable
        setIsUpdated={setIsUpdated}
        eventBanners={eventBanners}
        deleteEventBanner={deleteEventBanner}
      />
    </>
  );
}
