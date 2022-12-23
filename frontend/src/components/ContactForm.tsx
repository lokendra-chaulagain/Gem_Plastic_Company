import React, { useState, useEffect } from "react";
import styles from "../styles/modules/Contact.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const mailSendSuccess = () => toast.success("We will notify our updates");
  const sendMailError = () => toast.error("Something Went Wrong");
  const [isUpdated, setIsUpdated] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let handleAllField = watch();

  const sendMail = async () => {
    try {
      const res = await axios.post (`${process.env.NEXT_PUBLIC_API_URL}/contact`, handleAllField);
      mailSendSuccess();
      console.log("Mail send successfully");
      setIsUpdated(true);
      reset();
    } catch (error) {
      console.log(error);
      sendMailError();
    }
  };

  useEffect(() => {}, [isUpdated]);

  return (
    <div className="row">
      <h1 className="fw-bold mt-5 mb-3 text_color_blue my_custom_text_muted">
        Get In Touch With Us <span className="text_color_red">!</span>{" "}
      </h1>

      <div className="col-12 col-md-6 pb-5 pb-md-0 text_color_blue ">
        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted ">Email</h5>
        <div className="d-flex align-items-center gap-1">
          <AiOutlineMail />
          <p> gemplastic@gmail.com</p>
        </div>

        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted">Address</h5>
        <div className="d-flex align-items-center gap-1">
          <HiOutlineLocationMarker />
          <p> Basundhara, (Near Maharajgunj Ringroad)</p>
        </div>

        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted">Contact Numbers</h5>
        <div className="d-flex align-items-center gap-1">
          <BiPhone />
          <p>5528877, 5528981</p>
        </div>

        <h5 className="pt-4 mb-1 fw-bold my_custom_text_muted">Time we work</h5>
        <div className="d-flex align-items-center gap-1">
          <FiClock />
          <p>Mon - Sat : 8:00AM - 6:00AM</p>
        </div>
      </div>

      <form
        className="col-12 col-md-6  text_color_blue "
        onSubmit={handleSubmit(sendMail)}>
        <div>
          <input
            autoComplete="off"
            className={`${styles.contact_input_field} form-control form-control-lg px-2`}
            type="text"
            aria-label=".form-control-lg example"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
        </div>

        <div>
          <input
            autoComplete="off"
            className={`${styles.contact_input_field} form-control form-control-lg px-2`}
            type="text"
            placeholder="Email"
            aria-label=".form-control-lg example"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="form_hook_error">{`${errors.email.message}`}</p>}
        </div>

        <div>
          <input
            autoComplete="false"
            className={`${styles.contact_input_field} form-control form-control-lg px-2`}
            type="text"
            placeholder="Phone"
            aria-label=".form-control-lg example"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && <p className="form_hook_error">{`${errors.phone.message}`}</p>}
        </div>

        <div>
          <textarea
            className={`${styles.contact_input_field} form-control form-control-lg px-2`}
            placeholder="Message"
            aria-label=".form-control-lg example"
            {...register("message", { required: "message is required" })}
          />
          {errors.message && <p className="form_hook_error">{`${errors.message.message}`}</p>}
        </div>

        <div className="d-flex align-items-center justify-content-end mt-4">
          <button
            type="submit"
            className={`${styles.message_send_button} py-3`}>
            Send Message
          </button>
        </div>
      </form>
      <div>
        <div className={`${styles.google_map_section}`}>
          <h1 className="fw-bold py-5 text_color_blue my_custom_text_muted">
            Want To Visit Us <span className="text_color_red">!</span>{" "}
          </h1>

          <iframe
            className={`${styles.google_map}`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.142367895714!2d85.30715908700091!3d27.685844849236144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1837725d4d59%3A0x9814faeae42622df!2sGem%20Plasticrafts%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1668755430995!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: "6" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
