import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faMedium,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import FooterLogo from "../../assets/footer_logo_red.png";


const Footer = () => {
  return (
    <div className="main-container footer-container">
      <div className="footer-box">
        <span>You can contact us at</span>
        <span>
          <a href="mailto:africans_exec@mit.edu" className="footer-email">
            <b>africans_exec@mit.edu</b>
          </a>
        </span>
        <br />
        <span>Connect with us</span>
      </div>
      <div className="footer-social-media">
        <span className="footer-social-media-icon facebook">
          <a target="blank" href="https://www.facebook.com/mitafricans/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </span>

        <span className="footer-social-media-icon instagram">
          <a target="blank" href="https://www.instagram.com/mitafricans/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>

        <span className="footer-social-media-icon medium">
          <a target="blank" href="https://medium.com/mitafricans/">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </span>

        <span className="footer-social-media-icon twitter">
          <a target="blank" href="https://twitter.com/mitafricans/">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </span>
      </div>

      <div className="footer-box footer-copyright-box">
        <span>Copyright MIT Africans</span>
        <span><b>1997 - Present</b></span>
        <img src={FooterLogo} alt="Footer Logo" className="footer-logo"></img>
        <span>All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer
