import React, { useEffect } from "react";
import "./Partners.css";
import { partners } from "../../data/data-partners";
import PartnerCard from "./PartnerCard";


const Partners = ({ setActiveAnPageTitle }) => {

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
    setActiveAnPageTitle("partners", "Our Partners")
  })

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="partners-container">
          {getPartnersCardObjects()}
        </div>
      </div>
    </div>
  )
}

export default Partners
