import React, { useEffect, useState } from "react";
import "./Resources.css";
import ResourcesCard from "./ResourcesCard";
import { resources } from "../../data/data-resources";
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";
import Navbar from "../../components/navbar/Navbar";
import MetaTags from "../../components/meta-tags/MetaTags";


const Resources = ({ pageLoadTime, navbarRef, headerRef, pageTitleRef }) => {

  const [loading, setLoading] = useState(true);
  const pageTitle = "Resources for MIT Africans";
  const active = "resources";

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
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoading(false);
    }, pageLoadTime);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [loading])

  return (
    <div className="app-container">
      <MetaTags pageTitle={pageTitle} />
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
