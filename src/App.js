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

  const [active, setActive] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  const ensureNavbarStickyAfterHeaderHeightScroll = () => {

  }

  const setActiveAnPageTitle = (active, pageTitle) => {
    setActive(active);
    setPageTitle(pageTitle);
  }

  useEffect(() => {
    window.addEventListener("resize", ensureNavbarStickyAfterHeaderHeightScroll);
    return () => window.removeEventListener("resize", ensureNavbarStickyAfterHeaderHeightScroll);
  }, [])


  useEffect(() => {
    document.title = "MIT Africans | " + pageTitle;
  }, [active, pageTitle])


  return (
    <div className="main-container">
      <Header />
      <Navbar active={active} />
      <PageTitle title={pageTitle} />
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={props => (<Home {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/about"
            render={props => (<About {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/partners"
            render={props => (<Partners {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/resources"
            render={props => (<Resources {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />
          <Route
            path="/faq"
            render={props => (<FAQs {...props} setActiveAnPageTitle={setActiveAnPageTitle} />)} />

          {/* When a user enters an invalid route, redirect to the home page */}
          <Redirect to="/" />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
