import React from "react";
import "./ExecMemberCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";


const ExecMemberCard = (props) => {
  const {
    name, position, city_origin, country_origin,
    majors, linkedin, facebook, instagram, email } = props;


  const getMajors = () => {
    return majors.map((major) => (
      <span key={major.key}>
        {major.course_name} <i>({major.course_number})</i>
      </span>
    ));
  }

  return (
    <div className="exec-member-card-container">
      <div className="exec-member-card-inner">
        <div className="exec-member-photo-container">
        </div>

        <div className="exec-member-details">

          <div className="exec-member-name-origin-container">
            <h4>{name}</h4>
            <span className="exec-member-origin">({city_origin}, {country_origin})</span>
          </div>

          <div className="exec-member-majors-container">
            {getMajors()}
          </div>

          <div className="exec-member-links-container">
            {facebook && (
              <span className="icon facebook">
                <a target="_blank" href={facebook} rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </span>
            )}

            {linkedin && (
              <span className="icon linkedin">
                <a target="_blank" href={linkedin} rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </span>
            )}

            {instagram && (
              <span className="icon instagram">
                <a target="_blank" href={instagram} rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </span>
            )}

            {email && (
              <span className="icon email">
                <a target="_blank" href={`mailto:${email}`} rel="noreferrer">
                  <FontAwesomeIcon icon={faEnvelopeSquare} />
                </a>
              </span>
            )}
          </div>


          <div className="exec-member-role-container">
            <h6>{position}</h6>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ExecMemberCard
