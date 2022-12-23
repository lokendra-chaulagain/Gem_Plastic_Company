import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import OurServicesTable from "../../components/ourServices/OurServicesTable";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Portfolio() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteService = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`service/${id}`);

      setIsUpdated(1);
      deleteSuccess();
      console.log("Review deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [services, setServices] = useState([]);
  const fetchAllService = async () => {
    try {
      let res = await CallApi.fetchData(`service`);

      setServices(res);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  useEffect(() => {
    fetchAllService();
  }, [isUpdated]);

  return (
    <>
      <Header pageTitle={"Our Services"} />
      <OurServicesTable
        services={services}
        deleteService={deleteService}
        setIsUpdated={setIsUpdated}
      />
    </>
  );
}

export default Portfolio;
