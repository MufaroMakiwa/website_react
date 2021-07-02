import React, { useEffect } from "react";
import "./Partners.css";

const Partners = ({ setActiveAnPageTitle }) => {

  useEffect(() => {
    setActiveAnPageTitle("partners", "Our Partners")
  })

  return (
    <div>
      PARTNERS
    </div>
  )
}

export default Partners
