import React from "react";
import styles from "../styles/modules/Contact.module.css";
import { TbCloudUpload } from "react-icons/tb";

const ApplyJobModal = () => {
  return (
    <>
      <button
        type="button"
        className={`${styles.message_send_button} `}
        data-bs-toggle="modal"
        data-bs-target="#vacancyApply">
        Apply
      </button>

      <div
        className="modal fade"
        id="vacancyApply"
        tab-index="-1"
        aria-labelledby="vacancyApplyLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content container-fluid py-4">
            <div className="d-flex  flex-column text-center align-items-center mb-5 ">
              <h3>Leave us a message</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority Lorem Ipsum available. of passages of Lorem Ipsum available, but the majority Lorem Ipsum .</p>
            </div>

            <input
              className={`${styles.contact_input_field} form-control form-control-lg  `}
              type="text"
              placeholder="Name"
              aria-label=".form-control-lg example"
            />
            <input
              className={`${styles.contact_input_field} form-control form-control-lg `}
              type="text"
              placeholder="Email"
              aria-label=".form-control-lg example"
            />
            <input
              className={`${styles.contact_input_field} form-control form-control-lg `}
              type="text"
              placeholder="Phone"
              aria-label=".form-control-lg example"
            />
            <textarea
              className={`${styles.contact_input_field} form-control form-control-lg `}
              placeholder="Message"
              aria-label=".form-control-lg example"
            />

            <label
              htmlFor="loki"
              className={`${styles.resume_input_field} cursor_pointer`}>
              <input
                required
                name="file"
                type="file"
                id="loki"
                placeholder="Resume / CV"
                autoComplete="off"
                className="mx-0 row contactFormInput fw-light mb-4 border-0 d-none "
              />
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <TbCloudUpload
                  size={40}
                  color="#d35741"
                />
                <p className="">Upload your resume / cv here !</p>
              </div>
            </label>

            <div className="d-flex gap-2 justify-content-end mt-4">
              <button
                type="button"
                className={`${styles.message_send_button}`}
                data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className={`${styles.message_send_button}`}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyJobModal;
