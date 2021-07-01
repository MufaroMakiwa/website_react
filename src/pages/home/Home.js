import React, { useEffect } from "react";
import "./Home.css";


const Home = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("Home", "Welcome to MIT Africans")
  })

  return (
    <div className="main-container">
      HOME
    </div>
  )
}

export default Home
