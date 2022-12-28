import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";
const PlanetDetails = (props) => {
  return (
    <ItemDetails itemId={props.planetid} {...props}>
      <Record field={"diameter"} label={"Diameter"} />
      <Record field={"rotationPeriod"} label={"R-Period"} />
    </ItemDetails>
  );
};
const MapPlanetDetailsData = (sw) => {
  return {
    getItem: sw.getPlanet,
    imageUrl: sw.getPlanetImage,
  };
};
export default SSconsumer(PlanetDetails, MapPlanetDetailsData);
