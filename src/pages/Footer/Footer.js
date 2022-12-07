import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/Footer/Footer.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import ContactForm from "./ContactForm/ContactForm";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <ContactForm />
      <div className="content-container">
        <div className="icon-wrapper">
          <AiOutlineFacebook className="footer-icon-class" />
          <AiOutlineInstagram className="footer-icon-class" />
          <AiOutlineLinkedin className="footer-icon-class" />
        </div>
        <div className="footnote">
          VINH NGUYEN
          <span style={{ marginLeft: "10px" }}>©2022</span>
        </div>
      </div>
    </footer>
  );
}
