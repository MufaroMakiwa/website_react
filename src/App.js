import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Partners from "./pages/partners/Partners";
import Resources from "./pages/resources/Resources";
import FAQs from "./pages/faq/FAQs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageTitle from "./components/page_title/PageTitle";
import Navbar from "./components/navbar/Navbar";



const App = () => {

  // state to keep track of the active menu on the navbar and page title
  const [active, setActive] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  // references to header and navbar to make navbar sticky
  const headerRef = useRef();
  const pageTitleRef = useRef();
  const navbarRef = useRef();

  // to add loading and a loading page. To also update this this loading after images are done loading

  const ensureNavbarStickyAfterHeaderHeightScroll = () => {
    if (window.pageYOffset > headerRef.current.scrollHeight) {
      navbarRef.current.classList.add("navbar-sticky");
      pageTitleRef.current.style.paddingTop = (navbarRef.current.scrollHeight) + "px";
    } else {
      navbarRef.current.classList.remove("navbar-sticky");
      pageTitleRef.current.style.paddingTop = null;
    }
  }

  const setActiveAnPageTitle = (active, pageTitle) => {
    setActive(active);
    setPageTitle(pageTitle);
  }

  useEffect(() => {
    window.addEventListener("scroll", ensureNavbarStickyAfterHeaderHeightScroll);
    return () => window.removeEventListener("scroll", ensureNavbarStickyAfterHeaderHeightScroll);
  }, [])


  useEffect(() => {
    console.log("Page title use effect");
    document.title = "MIT Africans | " + pageTitle;
  }, [active, pageTitle])


  return (
    <div className="page-container">
      <Header headerRef={headerRef} />
      <Navbar active={active} navbarRef={navbarRef} />
      <PageTitle title={pageTitle} pageTitleRef={pageTitleRef} />
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={(props) => (<Home {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/about"
            render={(props) => (<About {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/partners"
            render={(props) => (<Partners {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/resources"
            render={(props) => (<Resources {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/faq"
            render={(props) => (<FAQs {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />

          {/* When a user enters an invalid route, redirect to the home page */}
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
