import picture from "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/img/bio.png"
import {CgArrowLongRight} from "react-icons/cg"

export default function BannerTextComponent() {
  return (
    <div className="banner-text-div">
      <div className="banner-text-component-container">
      <div className="banner-text-wrapper" data-aos="fade-right">
        <div className="banner-text-items">
        <h3 className="banner-text" id="banner-pre-header-text">HI, I'M VINH</h3>
        <h2 className="banner-text" id="banner-header-text"><span id="line-element"></span>SOFTWARE DEVELOPER</h2>
        </div>
        <div className="banner-text-items">
        <p className="banner-text" id="banner-content-text">
        <span>"I perform best in a <span className="highlight">work</span> culture that promotes high-energy <span className="highlight">teamwork</span> balanced with <span className="highlight">positivity</span> and <span className="highlight">collaboration.</span>"</span></p>
        <div className="main-buttons" id="aboutmeBtn-wrapper">
          <a href="#portfolio"><button id="aboutme-btn" >portfolio<span id="btn-arrow-element"><CgArrowLongRight/></span></button></a>
        </div>
        </div>
      </div>
      <div id="picture">
      <img src={picture}/>
      </div>
      </div>
    </div>
  );
}
