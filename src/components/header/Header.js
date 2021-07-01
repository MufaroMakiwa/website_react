import React from "react";
import "./Header.css";
import HeaderLogo from "../../assets/header_logo.png";

const Header = () => {
  return (
    <div className="main-container header-container">
      <img src={HeaderLogo} alt="Header Logo" className="header-logo"></img>
    </div>
  )
}

export default Header
