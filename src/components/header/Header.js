import React from "react";
import "./Header.css";
import header_logo from "../../assets/header_logo.png";

const Header = () => {
  return (
    <div className="main-container header-container">
      <img src={header_logo} alt="Header Logo" className="header-logo"></img>
    </div>
  )
}

export default Header
