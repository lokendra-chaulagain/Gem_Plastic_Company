import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../context/MiscellaneousContext";
import Header from "../components/Header";
import SubscriberTable from "../components/subscriber/SubscriberTable";
import Api from "../../service/Api.js";
let CallApi = new Api();

function Subscriber() {
  const { deleteSuccess } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [subscribers, setSubscribers] = useState([]);
  const [page, setPage] = useState(1);
  const [subscriberTotalCount, setSubscriberTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const deleteSubscriber = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`subscriber/${id}`);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Subscriber deleted success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const fetchAllSubscriber = async () => {
    try {
      let res = await CallApi.fetchData(`subscriber?page=${page}&size=${5}`);
      res && setSubscribers(res.allSubscriber);
      setSubscriberTotalCount(res.totalSubscriberCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllSubscriber();
  }, [isUpdated, page]);

  return (
    <>
      <Header pageTitle={"Subscribers"} />
      <SubscriberTable
        deleteSubscriber={deleteSubscriber}
        subscribers={subscribers}
        subscriberTotalCount={subscriberTotalCount}
      />
      <div
        className="d-flex justify-content-end me-5"
        style={{ marginTop: "-40px" }}>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={currentCount > 5 ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination"
                onClick={handlePrev}>
                Previous
              </a>
            </li>

            <li className={subscriberTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination "
                onClick={handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Subscriber;
