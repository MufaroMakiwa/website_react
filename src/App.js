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

  // references to header, navbar and page title to make navbar sticky on scroll
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

  // when the page is loading, we disable scrolling so that the user is always at the top of the page
  // when the loading page is removed
  const togglePageScroll = (loading) => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

  const loadPage = (setLoading) => {
    // scroll to top everytime the page loads
    window.scrollTo(0, 0);

    // remove the loading screen after the page load time
    let timer = setTimeout(() => {
      setLoading(false);
    }, pageLoadTime);
    return () => clearTimeout(timer);
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
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} 
              togglePageScroll={togglePageScroll}
              loadPage={loadPage} />)}
        />
        <Route
          path="/about-us"
          render={(props) => (
            <AboutUs
              {...props}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef}
              togglePageScroll={togglePageScroll} 
              loadPage={loadPage} />)}
        />
        <Route
          path="/partners"
          render={(props) => (
            <Partners
              {...props}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef}
              togglePageScroll={togglePageScroll}
              loadPage={loadPage} />)}
        />
        <Route
          path="/resources"
          render={(props) => (
            <Resources
              {...props}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef}
              togglePageScroll={togglePageScroll}
              loadPage={loadPage} />)}
        />
        <Route
          path="/faqs"
          render={(props) => (
            <FAQs
              {...props}
              navbarRef={navbarRef}
              pageTitleRef={pageTitleRef}
              headerRef={headerRef} 
              togglePageScroll={togglePageScroll}
              loadPage={loadPage} />)}
        />

        {/* When a user enters an invalid route, redirect to the home page */}
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
