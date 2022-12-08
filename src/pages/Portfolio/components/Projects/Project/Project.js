import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import Modal from "./Modal/Modal";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};


export default function Project(project) {
  const { id, project_name, body, image } = project.project;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="column" id={id}>
      <div className="portfolio-item">
        <div className="image">
          <img
            className="image__img"
            src={image}
          ></img>
          <div className="image__overlay">
            <div className="image__heading">{project_name}</div>
            <div className="image__subhead">{body}</div>
            <div className="image__button" style={BUTTON_WRAPPER_STYLES}>
              <button id="button_btn" onClick={() => setIsOpen(true)} >
                Learn more<span className="button-arrow-wrapper"><MdOutlineArrowForwardIos/></span>
              </button>
            </div>
          </div>
        </div>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}          
        >
          {/* ProjectDetail as a children */}
          <ProjectDetail project={project} />
        </Modal>
      </div>
    </div>
  );
}
