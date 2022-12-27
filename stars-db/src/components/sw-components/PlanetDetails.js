import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";
const PlanetDetails = ({ swapi }) => {
  return (
    <ItemDetails
      itemId={5}
      getItem={swapi.getPlanet}
      imageUrl={swapi.getPlanetImage(5)}
    >
      <Record field={"diameter"} label={"Diameter"} />
      <Record field={"rotationPeriod"} label={"R-Period"} />
    </ItemDetails>
  );
};

export default SSconsumer(PlanetDetails);
