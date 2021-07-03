import React, { useEffect } from "react";
import "./Resources.css";
import ResourcesCard from "./ResourcesCard";
import { resources } from "./data-resources";


const Resources = ({ setActiveAnPageTitle }) => {

  const getResourcesCardObjects = () => {
    return resources.map((resource) => (
      <ResourcesCard
        key={resource.key}
        title={resource.title}
        url_text={resource.url_text}
        url={resource.url}
        content={resource.content} />
    ))
  }

  useEffect(() => {
    setActiveAnPageTitle("resources", "Resources for MIT Africans")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="resources-container">
          {getResourcesCardObjects()}
        </div>
      </div>
    </div>
  )
}

export default Resources
