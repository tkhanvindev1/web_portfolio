import React from "react";
import ReactDom from "react-dom";
import LinkComponent from "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/UI/LinkComponent/LinkComponent.js";
import { GrClose } from "react-icons/gr";
import Slider from "./Components/Slider";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/Portfolio/components/Projects/Project/Modal/Modal.css";

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div id="overlay">
        <div className="modal-wrapper">
          <div className="header">
            <div id="project-name">
              <h2 id="project__name">Project name</h2>
            </div>
            <GrClose
              onClick={onClose}
              id="close-btn"
              style={{ fontSize: "64px" }}
            />
          </div>
          <Slider />
          <LinkComponent />
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default Modal;
