import React, { useEffect, useState } from "react";
import "./FAQs.css";
import FAQCard from "./FAQCard";
import { faqs } from "../../data/data-faq";

const FAQs = ({ setActiveAnPageTitle }) => {

  const [openId, setOpenId] = useState(null);

  const getFAQCardObjects = () => {
    return faqs.map((faq) => (
      <FAQCard
        key={faq.key}
        id={faq.key}
        openId={openId}
        setOpenId={setOpenId}
        question={faq.question}
        answer={faq.answer}
        url_text={faq.url_text}
        url={faq.url}
        text_after={faq.text_after} />
    ))
  }

  useEffect(() => {
    setActiveAnPageTitle("faqs", "Frequently Asked Questions")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="faqs-container">
          {getFAQCardObjects()}
        </div>
      </div>
    </div>
  )
}

export default FAQs
