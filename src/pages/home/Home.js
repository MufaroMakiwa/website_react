import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/page_title/PageTitle";



const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <PageTitle title="Welcome to MIT Africans" />
      HOME
      <Footer />
    </div>
  )
}

export default Home
