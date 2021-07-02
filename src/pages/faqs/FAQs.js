import React, { useEffect } from "react";
import "./FAQs.css";

const FAQs = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("faqs", "Frequently Asked Questions")
  })

  return (
    <div>
      FAQs
    </div>
  )
}

export default FAQs
