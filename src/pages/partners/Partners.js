import React, { useEffect } from "react";
import "./Partners.css";

const Partners = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("partners", "Our Partners")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        Partners
      </div>
    </div>
  )
}

export default Partners
