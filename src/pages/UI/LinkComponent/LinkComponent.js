import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/UI/LinkComponent/LinkComponent.css"

export default function LinkComponent() {
  return (
    <div className="links-container">
      <a
        className="icon-btn"
        href="https://github.com/tkhanvindev1?tab=repositories"
      >
        <FaGithub className="icons"></FaGithub>
      </a>
      <a className="icon-btn" href="https://www.instagram.com/v1nh.dev/">
        <CgWebsite className="icons" />
      </a>
      <a
        className="icon-btn"
        href="https://www.linkedin.com/in/vinh-nguyen-157181217/"
      >
        <FaYoutube className="icons" />
      </a>
    </div>
  );
}

