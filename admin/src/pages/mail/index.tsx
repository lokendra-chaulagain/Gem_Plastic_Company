import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import MailTable from "../../components/mail/MailTable";
import Api from "../../../service/Api.js";
let CallApi = new Api();

function Mail() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);

  const deleteMail = async (id: any) => {
    try {
      let res = await CallApi.deleteData(`contact/${id}`);
      setIsUpdated(1);
      deleteSuccess();
      console.log("Mail deleted success");
    } catch (error) {
      console.log(error);
      somethingWentWrong();
    }
  };

  const [page, setPage] = useState(1);
  const [mailTotalCount, setMailTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(5);

  const handleNext = () => {
    setPage(page + 1);
    setCurrentCount(currentCount + 5);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setCurrentCount(currentCount - 5);
  };

  const [mails, setMails] = useState([]);
  const fetchAllMail = async () => {
    try {
      let res = await CallApi.fetchData(`contact?page=${page}&size=${5}`);
      setMails(res.allContact);
      setMailTotalCount(res.totalMailCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllMail();
  }, [isUpdated, page]);

  return (
    <>
      <Header pageTitle={"Mails"} />
      <MailTable
        mails={mails}
        deleteMail={deleteMail}
        mailTotalCount={mailTotalCount}
      />
      <div className="d-flex justify-content-end me-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={currentCount > 5 ? "page-item" : "disabled"}>
              <a
                className="page-link rounded-0 h6 next_prev_pagination"
                onClick={handlePrev}>
                Previous
              </a>
            </li>

            <li className={mailTotalCount - 1 >= currentCount ? "page-item" : "disabled"}>
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

export default Mail;
