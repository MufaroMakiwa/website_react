import React, { useState, useRef } from "react";
import "./FAQCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQCard = (props) => {
  const { question, answer, url_text, url, text_after } = props;

  const [open, setOpen] = useState(false);
  const contentRef = useRef();

  const toggleContent = () => {
    if (!open) {
      const height = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = `${height}px`
    } else {
      contentRef.current.style.maxHeight = `${0}px`
    }
    setOpen(prevState => !prevState)
  }

  const getAnswerText = () => {
    if (url_text) {
      return (
        <p>
          {answer}{" "}
          <a href={url} target="_blank" rel="noreferrer noopener">{url_text}</a>{text_after}
        </p>
      )
    }

    return (
      <p>
        {answer}{text_after}
      </p>
    )
  }

  return (
    <div className={`faq-card-container ${open ? "open" : ""}`}>
      <div className="faq-card-summary" onClick={toggleContent}>
        <span>{question}</span>
        <div className="faq-card-icon-container">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="faq-card-icon" />
        </div>
      </div>

      <div className="faq-card-content" ref={contentRef}>
        {getAnswerText()}
      </div>
    </div>
  )
}

export default FAQCard
