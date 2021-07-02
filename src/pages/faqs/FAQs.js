import React, { useEffect } from "react";
import "./FAQs.css";
import FAQCard from "./FAQCard"

const FAQs = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("faqs", "Frequently Asked Questions")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="faqs-container">
          <FAQCard />
          <FAQCard />
        </div>
      </div>
    </div>
  )
}

export default FAQs
