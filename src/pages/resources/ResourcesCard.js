import React from "react";
import "./ResourcesCard.css";


const ResourcesCard = (props) => {

  const { title, url, url_text, content } = props;

  return (
    <div className="resource-card-container">
      <h1>{title}</h1>
      <h4><a target="_blank" href={url} rel="noreferrer">{url_text}</a></h4>
      <p>{content}</p>
    </div>
  )
}

export default ResourcesCard
