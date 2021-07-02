import React, { useEffect } from "react";
import "./AboutUs.css"

const AboutUs = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("about-us", "About Us")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        About Us
      </div>
    </div>
  )
}

export default AboutUs
