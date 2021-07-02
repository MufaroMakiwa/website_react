import React, { useState } from "react";
import "./FAQCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQCard = (props) => {

  const [open, setOpen] = useState(false);

  const toggleContent = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <div className={`faq-card-container ${open ? "open" : ""}`}>
      <div className="faq-card-summary" onClick={toggleContent}>
        <span>This is the question and it is very long. I am scared it is not going to fit  but I will try</span>
        <div className="faq-card-icon-container">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="faq-card-icon" />
        </div>
      </div>

      <div className="faq-card-content">
        <p>
          This is just to see how this is going to behave. To be honest I do not know
          what exactly is going to happen but I just hope this manages to work so
          that I can be happy and not have to spend the whole day working on it.
        </p>
      </div>
    </div>
  )
}

export default FAQCard
