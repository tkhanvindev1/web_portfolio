import React, { useState, useEffect } from "react";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/NavigationBar/CollapseMenu/CollapseMenu.css";

export default function MobileView(props) {    
  return (
    <div className="toggle-button" onClick={()=>{ !props.status? props.active(true) : props.active(false)}}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
