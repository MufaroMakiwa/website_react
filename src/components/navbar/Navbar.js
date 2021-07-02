import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";


const Navbar = ({ active, navbarRef }) => {
  // to toggle the collapsed menu
  const [displayMenu, setDisplayMenu] = useState(false);

  // to navigate to other pages when user clicks on a navigation link
  const history = useHistory();

  const navigateToPage = (selected) => {
    // close the side menu if it is open
    if (displayMenu) {
      setDisplayMenu(false);
    }
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

  const ensureSideMenuClosedAboveXsWindowWidth = () => {
    if (window.innerWidth >= 600) {
      navbarRef.current.classList.remove("open-side-menu");
      setDisplayMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", ensureSideMenuClosedAboveXsWindowWidth);
    return () => window.removeEventListener("resize", ensureSideMenuClosedAboveXsWindowWidth);
  })


  return (
    <div
      className={`main-container navbar-container ${displayMenu ? "open-side-menu" : ""}`}
      ref={navbarRef}>
      <div className="navbar-title-on-xs-screen">
        <span>{getNavBarTitle()}</span>
      </div>

      <div
        className="navbar-toggler"
        onClick={() => setDisplayMenu(true)}>
        <FontAwesomeIcon icon={faBars} />
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
      <div className="navbar-modal" onClick={() => setDisplayMenu(false)}></div>
    </div>
  )
}

export default Navbar
