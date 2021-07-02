import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";


const Navbar = ({ active, navbarRef }) => {
  // to navigate to other pages when user clicks on a navigation link
  const history = useHistory();

  const navigateToPage = (selected) => {
    if (selected === active) {
      history.go(0)
    } else {
      history.push("/" + selected)
    }
  }

  const getNavBarTitle = () => {
    switch (active) {
      case "home":
        return "Home"

      case "about-us":
        return "About Us"

      case "partners":
        return "Partners"

      case "resources":
        return "Resources";

      case "faqs":
        return "FAQs";

      default:
    }
  }


  return (
    <div className="main-container navbar-container" ref={navbarRef}>
      <div className="navbar-title-on-xs-screen">
        <span>{getNavBarTitle()}</span>
      </div>

      <div className="navbar-toggler">
        X
      </div>
      <ul>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => navigateToPage("home")}>
          <span>Home</span>
        </li>
        <li
          className={active === "about-us" ? "active" : ""}
          onClick={() => navigateToPage("about-us")}>
          <span>About Us</span>
        </li>
        <li
          className={active === "partners" ? "active" : ""}
          onClick={() => navigateToPage("partners")}>
          <span>Partners</span>
        </li>
        <li
          className={active === "resources" ? "active" : ""}
          onClick={() => navigateToPage("resources")}>
          <span>Resources</span>
        </li>
        <li>
          <a target="blank" href="https://www.facebook.com/pg/mitafricans/events/">Events</a>
        </li>
        <li
          className={active === "faqs" ? "active" : ""}
          onClick={() => navigateToPage("faqs")}>
          <span>FAQs</span>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
