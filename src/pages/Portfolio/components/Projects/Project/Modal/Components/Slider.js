import React, { useEffect, useState } from "react";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/Portfolio/components/Projects/Project/Modal/Components/Slider.css";
import picture from "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/img/header.jpg";
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from "react-icons/md"

export default function Slider() {
  const data = [
    "https://i.pinimg.com/564x/09/8a/f4/098af471922c5e293df4fa27d960a2cf.jpg",
    "https://i.pinimg.com/564x/07/33/d9/0733d9d73a29496d52857be60e13f1c9.jpg",
    "https://i.pinimg.com/564x/92/dc/64/92dc647d6111eea9f7f81eeb08aa99cd.jpg",
    "https://i.pinimg.com/564x/5e/3c/2c/5e3c2cc69286810c787a53d51d6a9e3c.jpg",
  ]


const [count, setCount] = useState(0)

useEffect(()=>{
    console.log(count)
 
}, [count])

  return (
    <div className="img-container">
      <div className="arrow-btn-container">
        <div className="arrow-btn-wrapper">
          <button id="left__btn" className="arrow__btn" onClick={() => count ===0? setCount(data.length-1) : setCount(count - 1)}>
          <MdOutlineArrowBackIos className="icon__btn"/>
          </button>
        </div>

        <div className="arrow-btn-wrapper">
          <button id="right__btn" className="arrow__btn" onClick={() => count === data.length-1? setCount(0)  : setCount(count + 1)}>
            <MdOutlineArrowForwardIos className="icon__btn"/>
          </button>
        </div>
      </div>
      <img src={data[count]}></img>
    </div>
  );
}
