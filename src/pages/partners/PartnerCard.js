import React from "react";
import "./PartnerCard.css";

const PartnerCard = (props) => {

  const { name, photo, url, description } = props;
  return (
    <div className="partner-card-container">
      <div className="partner-card-name-container">
        <a href={url} target="_blank" rel="noreferrer">{name}</a>
      </div>
      <div className="partner-image-container">
        <img src={photo} alt="Partner" />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default PartnerCard
