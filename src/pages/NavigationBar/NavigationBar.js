import React, { useEffect, useState } from "react";

import CollapseMenu from "./CollapseMenu/CollapseMenu";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/NavigationBar/NavigationBar.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";
import {MdOutlineWavingHand} from "react-icons/md";

export default function NavigationBar() {
  const [newClassHome, setNewClassHome] = useState(false);
  const [newClassAbout, setNewClassAbout] = useState(false);
  const [newClassProjects, setNewClassProjects] = useState(false);
  const [newClassContact, setNewClassContact] = useState(false);
  const [active, setActive] = useState(false)
  const [scrollPosition,setScrollPosition] = useState(0)
  
  useEffect(()=> {
    // console.log(active)
  },[active])

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};
useEffect(()=>{
  // console.log(scrollPosition)
},[scrollPosition])

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  
  return (
    <div className="navbar-div" id={scrollPosition > 50? "navbar_active":""}>
      <div className="navbar-component" id="logo-div">
        <div id="logo">
          <a href="#home">
            <span id="greeting_container">Hey, Welcome!<MdOutlineWavingHand/></span><span id="nav-message">let's connect:</span>  
            <span id="contact-icon-wrap">
                <a href="https://www.linkedin.com/in/vinh-nguyen-software-developer/"><AiFillLinkedin className="profile-icons" /></a>
                <a href="https://github.com/tkhanvindev1?tab=repositories"><AiFillGithub className="profile-icons" /></a>
                <a href="https://www.instagram.com/_vinh.nguyenn/"><FaInstagramSquare className="profile-icons" /></a>
              </span>
          </a>
        </div>
        <CollapseMenu active={setActive} status={active}/>
      </div>
      <ul className={active? 'active' : ''}>
        <li className={newClassHome ? "active" : ""}>
          <a href="#home" className={newClassHome ? "active" : ""}>
            HOME
          </a>
        </li>
        <li className={newClassProjects ? "active" : ""}>
          <a href="#portfolio" className={newClassProjects ? "active" : ""}>
            PROJECTS
          </a>
        </li>
        <li className={newClassAbout ? "active" : ""}>
          <a href="#about" className={newClassAbout ? "active" : ""}>
            ABOUT
          </a>
        </li>
        <li className={newClassContact ? "active" : ""}>
          <a href="#contact" className={newClassContact ? "active" : ""}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}
