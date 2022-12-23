import React from "react";
import ContactForm from "../components/ContactForm";
import styles from "../styles/modules/Contact.module.css";
import ContactHero from "../components/ContactHero";

export default function contact() {
  return (
    <>
      <div className={`${styles.contact_page_wrapper} container`}>
        <ContactHero />
        <ContactForm />
        {/* <TeamMemberSection /> */}
      </div>
    </>
  );
}
