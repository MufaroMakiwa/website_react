import React, { useEffect, useState } from "react";
import "./FAQs.css";
import FAQCard from "./FAQCard";
import { faqs } from "../../data/data-faq";
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";
import Navbar from "../../components/navbar/Navbar";
import MetaTags from "../../components/meta-tags/MetaTags";


const FAQs = ({ pageLoadTime, navbarRef, headerRef, pageTitleRef }) => {

  const [openId, setOpenId] = useState(null);
  const [loading, setLoading] = useState(true);
  const pageTitle = "Frequently Asked Questions";
  const active = "faqs";

  const getFAQCardObjects = () => {
    return faqs.map((faq) => (
      <FAQCard
        key={faq.key}
        id={faq.key}
        openId={openId}
        setOpenId={setOpenId}
        question={faq.question}
        answer={faq.answer}
        url_text={faq.url_text}
        url={faq.url}
        text_after={faq.text_after} />
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
          <div className="faqs-container">
            {getFAQCardObjects()}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default FAQs
