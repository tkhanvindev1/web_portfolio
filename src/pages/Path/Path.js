import React from "react";
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiTwotoneCalendar} from 'react-icons/ai'

import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/Path/Path.css";
export default function Path(status) {
  return (
    <div id="path" className="path-div">
      <div className="timeline-wrapper">
        <h3>Qualification</h3>
        <p>My personal journey</p>
        <ul className="timeline">
          <li>
            <details className="panel">
              <summary className="heading">Javascript & software development basics<span className="timeline-arrow-wrapper"><MdKeyboardArrowDown className="timeline-arrow"/></span></summary>
           
              <h3><span className="calendar-icons"><AiTwotoneCalendar/></span>May 2022 - June 2022</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
          </li>

          <li>
            <details className="panel">
              <summary className="heading">DevMountain Coding Bootcamp<span className="timeline-arrow-wrapper"><MdKeyboardArrowDown className="timeline-arrow"/></span></summary>
      
              <h3><span className="calendar-icons"><AiTwotoneCalendar/></span>June 2022 - September 2022</h3>
              <div className="panel-content-container">
              <p className="panel__list">- Learned and utilized Javascript libraries like: React, Next, Redux.</p>
              <p className="panel__list">- Built a Full-stack application with the goal to help people track their daily nutritional intakes.</p>
              <p className="panel__list"></p>
              </div>
            </details>
          </li>

          <li>
            <details className="panel">
              <summary className="heading">Freelance Web Developer<span className="timeline-arrow-wrapper"><MdKeyboardArrowDown className="timeline-arrow"/></span>
</summary> 
              <h3><span className="calendar-icons"><AiTwotoneCalendar/></span>September 2022 - Current</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </details>
          </li>
        </ul>
      </div>
      <div>
        <img></img>
      </div>
    </div>
  );
}
