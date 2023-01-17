import React, { useContext, useEffect, useState } from "react";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import Header from "../../components/Header";
import MailTable from "../../components/mail/MailTable";
import Api from "../../../service/Api.js";
import TableHeading from "../../components/TableHeading";
let CallApi = new Api();

function Mail() {
  const { deleteSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [isUpdated, setIsUpdated] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("latest");

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
      let res = await CallApi.fetchData(`contact?page=${page}&size=${5}&search=${searchInput}&sort=${sort}`);
      setMails(res.allContact);
      setMailTotalCount(res.totalMailCount);
      setIsUpdated(0);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllMail();
  }, [isUpdated, page, searchInput, sort]);

  return (
    <>
      <Header pageTitle={"Mails"} />

      <div className="d-flex align-items-center justify-content-between ">
        <TableHeading heading={`All Mails (${mailTotalCount})`} />

        <input
          type="text"
          className="form-control w-25 custom_input_search"
          id="searchInput"
          placeholder="Search By Email"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select
          onChange={(e) => setSort(e.target.value)}
          className="form-select custom_input_search w-25"
          aria-label="Sort Select">
          <option
            value="latest"
            selected>
            Latest
          </option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

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
