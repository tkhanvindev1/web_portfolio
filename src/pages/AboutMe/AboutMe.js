import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import image from "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/img/header.jpg"
import { MdLocationPin } from 'react-icons/md'
import { BiDownload } from 'react-icons/bi'

export default function AboutMe() {
  const data = [
    "I am dependable and creative with a strong work ethic and an artistic eye, but also bring a fun-loving and enthusiastic attitude. I possess experience in motivation, problem-solving, and innovation and I am confident that both my creative and technical talents will prove to be an invaluable addition to a team.",
    "I thrive in environments where innovation and experimentation are encouraged and I love to explore new concepts. I take pride in seeing a project through end-to-end and improving on existing ideas to create something even better. My diverse background has served me well in cultivating problem-solving, technical skills, and interpersonal skills strengths. These abilities, coupled with a passion for the field, are well-aligned with the requirements for the Software Engineer role. I perform best in a work culture that promotes high-energy teamwork balanced with positivity and collaboration.",
    "3.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
  ];

  const [dataValue, setDataValue] = useState(data[0]);

  useEffect(() => {
    console.log(dataValue);
  }, [dataValue]);

  return (
    <div className="about-me-div" id="about">
      <div className="about-me-container">
        <div className="bio-user-div">
          <div className="bio-content-container">
          <div className="image-container">
            <img id="bio-image" src={image}></img>
          </div>
          <div className="bio-details">        
          <div id="bio_name">Vinh Nguyen</div>
          <div id="bio_location"><span id="location_icon"><MdLocationPin/></span>United States</div>
          </div>
          </div>
          <div className="btn-container">
            <a
              id="resume-btn-a"
              href="https://docs.google.com/document/d/1PckTh9OruJUOf9Fn4wA5xRs-YxSqpU61NPJnn7mlf4Y/export?format=pdf">
              <button id="resume-btn"><span id="download_icon"><BiDownload/></span>download resume</button>
            </a>
          </div>
        </div>
        <div className="about-me-content-container">
          <div className="header-links-container">
            <button className="bio-links" id={dataValue === data[0]? 'bio_active' : ''} onClick={() => setDataValue(data[0])}>
              About
            </button>
            <button className="bio-links" id={dataValue === data[1]? 'bio_active' : ''} onClick={() => setDataValue(data[1])}>
              Work
            </button>
            <button className="bio-links" id={dataValue === data[2]? 'bio_active' : ''} onClick={() => setDataValue(data[2])}>
              Learning
            </button>
          </div>
          <div className="detail-content-wraper">
            <p>
              {dataValue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
