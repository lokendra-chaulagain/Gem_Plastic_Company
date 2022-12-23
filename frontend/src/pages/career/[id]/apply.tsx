import React from "react";
import styles from "../../../styles/modules/Contact.module.css";
import { TbCloudUpload } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

export default function apply() {
  const vacancyAppliedSuccess = () => toast.success("Job Applied Success");
  const sendMailError = () => toast.error("Something Went Wrong");

  const router = useRouter();
  const postId = router.query.id;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const apply = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, { ...handleAllField, jobPostId: postId });
      vacancyAppliedSuccess();
      console.log("Mail send successfully");
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  return (
    <div className="matter container mb-5 ">
      <form
        onSubmit={handleSubmit(apply)}
        className=" container-fluid py-4 pt-5 mt-3 text_color_blue">
        <div className="d-flex  flex-column text-center align-items-center mb-5 ">
          <p className="h2 fw-semibold text">Apply For The Vacancy</p>
        </div>

        <input
          className={`${styles.contact_input_field} form-control form-control-lg  `}
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
        />
        {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}

        <input
          className={`${styles.contact_input_field} form-control form-control-lg `}
          type="text"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        {errors.email && <p className="form_hook_error">{`${errors.email.message}`}</p>}
        <input
          className={`${styles.contact_input_field} form-control form-control-lg `}
          type="text"
          {...register("phone", { required: "Phone is required" })}
          placeholder="Phone"
        />
        {errors.phone && <p className="form_hook_error">{`${errors.phone.message}`}</p>}
        <textarea
          className={`${styles.contact_input_field} form-control form-control-lg `}
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p className="form_hook_error">{`${errors.message.message}`}</p>}

        <label
          htmlFor="fileInput"
          className={`${styles.resume_input_field} cursor_pointer`}>
          <input
            type="file"
            id="fileInput"
            placeholder="Resume / CV"
            autoComplete="off"
            className="mx-0 row contactFormInput fw-light mb-4 border-0 d-none  "
            {...register("file", { required: "file is required" })}
          />
          {errors.file && <p className="form_hook_error">{`${errors.file.message}`}</p>}

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
            type="submit"
            className={`${styles.message_send_button}`}>
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
