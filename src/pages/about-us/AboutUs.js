import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import ExecMemberCard from "./ExecMemberCard";
import { exec_members } from "../../data/data-exec-members";
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";
import Navbar from "../../components/navbar/Navbar";


const AboutUs = ({ pageLoadTime, navbarRef, headerRef, pageTitleRef }) => {


  const [loading, setLoading] = useState(true);
  const pageTitle = "About Us";
  const active = "about-us";

  // update page title
  document.title = `MIT Africans | ${pageTitle}`;

  const getExecMembersCardObjects = () => {
    return exec_members.map((execMember) => (
      <ExecMemberCard
        key={execMember.key}
        name={execMember.name}
        position={execMember.position}
        photo={execMember.photo}
        city_origin={execMember.city_origin}
        country_origin={execMember.country_origin}
        majors={execMember.majors}
        linkedin={execMember.linkedin}
        facebook={execMember.facebook}
        email={execMember.email}
        instagram={execMember.instagram} />
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
      <Loading loading={loading} />
      <Header headerRef={headerRef} />
      <Navbar active={active} navbarRef={navbarRef} />
      <PageTitle title={pageTitle} pageTitleRef={pageTitleRef} />
      <div className="page-container">
        <div className="page-content">
          <div className="about-us-container">
            <h1>Who We Are</h1>
            <p>
              We are the African Students’ Associations of the Massachusetts Institute
              of Technology, otherwise known as MIT Africans or ASA. We bring African
              culture to the MIT community, and we foster a community of diverse
              students with an interest in African culture and ongoing activities.
            </p>
            <h1>Our Goal</h1>
            <p>
              We aim to provide a learning environment for anything African related; to
              increase awareness about Africa and Africans among MIT students; showcase
              the various aspect of the African culture such as ways of life, food,
              music, and clothing; to assist new MIT members in adjusting to the MIT
              lifestyle, and to present Africa from the African perspective.
            </p>
            <h1>Our Team</h1>
            <div className="about-us-exec-container">
              {getExecMembersCardObjects()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default AboutUs
