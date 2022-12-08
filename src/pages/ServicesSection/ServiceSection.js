import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/ServicesSection/ServicesSection.css";
import { MdWeb, MdAppSettingsAlt } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
export default function ServiceSection() {
  return (
    <div className="service-section-div">
      <div className="service-section-container" data-aos="fade-up">
        <div className="service-section-header">
          <h2 id="service-header">What I deliever</h2>
        </div>
        <div className="service-items-container">
          <div className="service-item" id="web">
            <span className="service-label-header">
              <MdWeb className="section-header-icons" />
              Web development
            </span>
            <p className="service-item-text">
              I'll deliever and maintain, whether it is a simple text page or a
              complex web application.
            </p>
          </div>
          <div className="service-item" id="design">
            <span className="service-label-header">
              <AiOutlineAntDesign className="section-header-icons" />
              Web Design
            </span>
            <p className="service-item-text">
              I'll create dynamic changes to the appearance of a website,
              depending on the screen size and orientation of the device being
              used or will be used.
            </p>
          </div>
          <div className="service-item" id="fullapp">
            <span className="service-label-header">
              <MdAppSettingsAlt className="section-header-icons" />
              Full-stack App
            </span>
            <p className="service-item-text">
              I'll build a end-to-end application software development,
              including the front end and back end
            </p>
          </div>
          <div className="service-item" id="responsive">
            <span className="service-label-header">
              <SiMaterialdesignicons className="section-header-icons" />
              Responsive design
            </span>
            <p className="service-item-text">
              I'll create dynamic changes to the appearance of a website,
              depending on the screen size and orientation of the device being
              used or will be used.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
