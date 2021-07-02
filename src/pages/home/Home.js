import React, { useEffect } from "react";
import "./Home.css";


const Home = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("home", "Welcome to MIT Africans")
  })

  return (
    <div className="page-container">
      Home
    </div>
  )
}

export default Home
