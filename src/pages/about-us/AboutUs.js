import React, { useEffect } from "react";
import "./AboutUs.css"

const AboutUs = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("about-us", "About Us")
  })

  return (
    <div>
      ABOUT
    </div>
  )
}

export default AboutUs
