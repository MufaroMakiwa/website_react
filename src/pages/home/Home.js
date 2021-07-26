import React, { useEffect, useState } from "react";
import "./Home.css";
import CoverPhoto from "../../assets/cover_photo.jpg";
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";
import Navbar from "../../components/navbar/Navbar";


const Home = ({ navbarRef, headerRef, pageTitleRef, togglePageScroll, loadPage }) => {

  const [loading, setLoading] = useState(true);
  const pageTitle = "Welcome to MIT Africans";
  const active = "home";

  // update page title
  document.title = `MIT Africans | ${pageTitle}`;

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
          <div className="home-container">
            <p>
              We are a diverse community of Africans and friends of Africa at
              Massachusetts Institute of Technology.
            </p>
            <div className="image-soft-edges home-cover-photo">
              <img
                src={CoverPhoto}
                alt="Cover" />
            </div>
            <h2>Events on Facebook</h2>
            <p>Stay up to date with our events on{" "}
              <a href="https://www.facebook.com/pg/mitafricans/events/" target="_blank" rel="noreferrer noopener">Facebook</a>.
            </p>
            <h2>Medium Blog</h2>
            <p>
              We encourage Africans to share their experience through our{" "}
              <a href="https://medium.com/mitafricans" target="_blank" rel="noreferrer noopener">medium
                publication blog</a>.
            </p>
            <h2>African Learning Circle (ALC)</h2>
            <p>
              <a href="http://talkingdrum.mit.edu/" target="_blank" rel="noreferrer noopener">The Africa Learning Circle (ALC)</a>{" "}
              is the academic and
              innovation branch of the MIT African Students Association setup to
              strengthen the spirit and
              culture of innovation, principled entrepreneurship and vigorous study of
              the African
              continent's past, present and future. Its mission is to create a platform
              that equips our
              community to put it's powerful ideas into hands-on innovation, in line
              with the MIT mind and
              hand motto.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Home
