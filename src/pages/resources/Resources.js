import React, { useEffect } from "react";
import "./Resources.css";

const Resources = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("resources", "Resources for MIT Africans")
  })

  return (
    <div>
      RESOURCES
    </div>
  )
}

export default Resources
