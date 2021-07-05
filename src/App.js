import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Partners from "./pages/partners/Partners";
import Resources from "./pages/resources/Resources";
import FAQs from "./pages/faqs/FAQs";


const App = () => {

  // references to header and navbar to make navbar sticky on scroll
  const headerRef = useRef();
  const pageTitleRef = useRef();
  const navbarRef = useRef();
  const pageLoadTime = 2000;

  const ensureNavbarStickyAfterHeaderHeightScroll = () => {
    if (window.pageYOffset > headerRef.current.scrollHeight) {
      navbarRef.current.classList.add("navbar-sticky");
      pageTitleRef.current.style.paddingTop = (navbarRef.current.scrollHeight) + "px";
    } else {
      navbarRef.current.classList.remove("navbar-sticky");
      pageTitleRef.current.style.paddingTop = null;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ensureNavbarStickyAfterHeaderHeightScroll);
    return () => window.removeEventListener("scroll", ensureNavbarStickyAfterHeaderHeightScroll);
  }, [])

  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={(props) => (
            <Home
              {...props}
              pageLoadTime={pageLoadTime}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} />)}
        />
        <Route
          path="/about-us"
          render={(props) => (
            <AboutUs
              {...props}
              pageLoadTime={pageLoadTime}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} />)}
        />
        <Route
          path="/partners"
          render={(props) => (
            <Partners
              {...props}
              pageLoadTime={pageLoadTime}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} />)}
        />
        <Route
          path="/resources"
          render={(props) => (
            <Resources
              {...props}
              pageLoadTime={pageLoadTime}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} />)}
        />
        <Route
          path="/faqs"
          render={(props) => (
            <FAQs
              {...props}
              pageLoadTime={pageLoadTime}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} />)}
        />

        {/* When a user enters an invalid route, redirect to the home page */}
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
