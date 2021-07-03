import React, { useEffect } from "react";
import "./AboutUs.css"

const AboutUs = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("about-us", "About Us")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="about-us-container">
          <h1>Who We Are</h1>
          <p>
            We are the African Students’ Associations of the Massachusetts Institute
            of Technology, otherwise known as MIT Africans or ASA. We bring African
            culture to the MIT community, and we foster a community of diverse
            students with an interest in African culture and ongoing activities.
          </p>
          <h1>Our Goal</h1>
          <p>
            We aim to provide a learning environment for anything African related; to
            increase awareness about Africa and Africans among MIT students; showcase
            the various aspect of the African culture such as ways of life, food,
            music, and clothing; to assist new MIT members in adjusting to the MIT
            lifestyle, and to present Africa from the African perspective.
          </p>
          <h1>Our Team</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
