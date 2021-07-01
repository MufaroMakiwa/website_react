import React from "react";
import "./PageTitle.css";


const PageTitle = ({ title }) => {
  return (
    <div className="main-container page-title">
      <span>
        {title}
      </span>
    </div>
  )
}

export default PageTitle
