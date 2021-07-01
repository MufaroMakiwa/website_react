import React from "react";
import "./Header.css";
import HeaderLogo from "../../assets/header_logo.png";

const Header = ({ headerRef }) => {
  return (
    <div className="main-container header-container" ref={headerRef}>
      <img src={HeaderLogo} alt="Header Logo" className="header-logo"></img>
    </div>
  )
}

export default Header
