import React from "react";

export default function TermsAndCondition() {
  return (
    <div className="container privacy_policy_wrapper px-5 px-sm-0">
      <div className="row ">
        <h1 className="policy_heading">Terms & Conditions</h1>
        <p className="policy_paragraph">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://cuberto.com/</p>

        <p className="policy_paragraph mt-3">Information Collection And Use We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      </div>

      <div className="row mt-5">
        <h2 className="policy_heading">Types of Data Collected</h2>
      </div>

      <div className="row mt-5">
        <h3 className="policy_heading">Personal Data</h3>
        <p className="policy_paragraph">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
        <ul className="policy_paragraph ps-5 pt-2">
          <li>
            <p>Email address</p>
          </li>
          <li>
            <p>First name and last name</p>
          </li>
          <li>
            <p>Cookies and Usage Data</p>
          </li>
        </ul>
      </div>

      <div className="row mt-5">
        <h3 className="policy_heading">Usage Data</h3>
        <p className="policy_paragraph">We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computers Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
      </div>

      <div className="row mt-5">
        <h3 className="policy_heading">Tracking & Cookies Data</h3>
        <p className="policy_paragraph">
          We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
        </p>
      </div>
    </div>
  );
}
