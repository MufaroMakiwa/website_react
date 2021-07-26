import React, { useEffect, useState } from "react";
import "./Partners.css";
import { partners } from "../../data/data-partners";
import PartnerCard from "./PartnerCard";
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";
import Navbar from "../../components/navbar/Navbar";


const Partners = ({ navbarRef, headerRef, pageTitleRef, togglePageScroll, loadPage }) => {

  const [loading, setLoading] = useState(true);
  const pageTitle = "Our Partners";
  const active = "partners";

  // update page title
  document.title = `MIT Africans | ${pageTitle}`;

  const shuffle = function (array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  };

  const getPartnersCardObjects = () => {
    return shuffle(partners).map((partner) => (
      <PartnerCard
        key={partner.key}
        name={partner.name}
        url={partner.url}
        photo={partner.photo}
        description={partner.description} />
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
          <div className="partners-container">
            {getPartnersCardObjects()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Partners
