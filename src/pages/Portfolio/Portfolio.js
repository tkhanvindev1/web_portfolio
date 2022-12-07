import "./Portfolio.css";
import Projects from "./components/Projects/Projects";
import React from "react";
import { MdWorkOutline } from "react-icons/md";

function Portfolio() {
  const data = [
    {
      id: "1",
      project_name: "Hello world",
      body: "Lorem ipsum dolor sit amet",
      technologies: "html,css,js",
      idea: "Lorem ipsum dolor sit amet",
      about: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      challenge: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      github_link: "",
      img_link: "",
      web_link: "",
    },
  ];
  return (
    <div className="container" id="portfolio">
      <div className="text-center">
        <h3>My latest work<span id="work_icon"><MdWorkOutline/></span></h3>
        <p>Click learn more for details</p>
      </div>
      <Projects projects={data} />
    </div>
  );
}

export default Portfolio;
