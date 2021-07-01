import React from "react";
import "./PageTitle.css";


const PageTitle = ({ title, pageTitleRef }) => {
  return (
    <div className="main-container page-title" ref={pageTitleRef}>
      <span>
        {title}
      </span>
    </div>
  )
}

export default PageTitle
