import React from "react";
import styles from "../styles/modules/LatestProduct.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const Newsletter = () => {
  const mailSendSuccess = () => toast.success("We will notify our updates");
  const sendMailError = () => toast.error("Something Went Wrong");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  const createSubscriber = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscriber`, handleAllField);
      console.log("Form has been submitted");
      mailSendSuccess();
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  return (
    <div className={`${styles.newsletter_section} `}>
      <div className="container news_letter_padding">
        <div className={`${styles.news_letter_header} d-flex flex-column  text_color_white align-items-center text-center`}>
          <h1>Join to our Newsletter</h1>
          <p>If you never miss our interesting news by joining our newsletter.</p>
        </div>
        <form
          onSubmit={handleSubmit(createSubscriber)}
          className="d-flex flex-column flex-sm-row pt-5 mb-1">
          <input
            type="email"
            className={`${styles.form_control} form-control form-control-lg rounded-0 `}
            {...register("email", { required: "Email is required" })}
            placeholder="name@example.com"
          />
          <button
            type="submit"
            className={`${styles.subscribe_button} px-5 py-3 py-sm-0 mt-3 mt-sm-0`}>
            Subscribe
          </button>
        </form>
        {errors.email && <p className="form_hook_error fw-semibold ">{`${errors.email.message}`}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
