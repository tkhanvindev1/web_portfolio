import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import Modal from "./Modal/Modal";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};


export default function Project(project) {
  const { id, project_name, body } = project.project;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="column" id={id}>
      <div className="portfolio-item">
        <div className="image">
          <img
            className="image__img"
            src="https://i.pinimg.com/564x/c5/85/40/c58540b6ed16a8203d3f1f4f900e058c.jpg"
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
