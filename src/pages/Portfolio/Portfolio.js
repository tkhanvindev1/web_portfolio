import "./Portfolio.css";
import Projects from "./components/Projects/Projects";
import React from "react";
import { MdWorkOutline } from "react-icons/md";


function Portfolio() {
  const data = [
    {
      id: "1",
      image:"https://i.pinimg.com/originals/08/79/48/0879481bd93447133977c6d75f523814.gif",
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
    {
      id: "2",
      image:"https://i.pinimg.com/originals/85/2f/41/852f41f9212cff2f84b319f3a4b383b8.gif",
      project_name: "Hello world",
      body: "Lorem ipsum dolor sit amet",
      technologies: "html,css,js",
      idea: "Lorem ipsum dolor sit amet",
      about: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      challenge: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      github_link: "",
      img_link: "",
      web_link: "",
    }
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
