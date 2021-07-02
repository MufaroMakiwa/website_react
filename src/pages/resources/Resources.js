import React, { useEffect } from "react";
import "./Resources.css";

const Resources = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("resources", "Resources for MIT Africans")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        Resources
      </div>
    </div>
  )
}

export default Resources
