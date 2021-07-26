import React, { useEffect, useState } from "react";
import "./Resources.css";
import ResourcesCard from "./ResourcesCard";
import { resources } from "../../data/data-resources";
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";
import Navbar from "../../components/navbar/Navbar";


const Resources = ({ navbarRef, headerRef, pageTitleRef, togglePageScroll, loadPage }) => {

  const [loading, setLoading] = useState(true);
  const pageTitle = "Resources for MIT Africans";
  const active = "resources";

  // update page title
  document.title = `MIT Africans | ${pageTitle}`;

  const getResourcesCardObjects = () => {
    return resources.map((resource) => (
      <ResourcesCard
        key={resource.key}
        title={resource.title}
        url_text={resource.url_text}
        url={resource.url}
        content={resource.content} />
    ))
  }

  useEffect(() => {
    return loadPage(setLoading)
  }, []);

  useEffect(() => {
    togglePageScroll(loading)
  }, [loading])

  return (
    <div className="app-container">
      <Loading loading={loading} />
      <Header headerRef={headerRef} />
      <Navbar active={active} navbarRef={navbarRef} />
      <PageTitle title={pageTitle} pageTitleRef={pageTitleRef} />
      <div className="page-container">
        <div className="page-content">
          <div className="resources-container">
            {getResourcesCardObjects()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Resources
