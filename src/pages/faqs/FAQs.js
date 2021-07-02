import React, { useEffect } from "react";
import "./FAQs.css";

const FAQs = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("faqs", "Frequently Asked Questions")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        FAQs
      </div>
    </div>
  )
}

export default FAQs
