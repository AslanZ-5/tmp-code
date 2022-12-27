import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";

const StarShipDetails = ({ swapi }) => {
  return (
    <ItemDetails
      getItem={swapi.getStarship}
      itemId={12}
      imageUrl={swapi.getStarShipImage(12)}
    >
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="crew" label="Crew" />
    </ItemDetails>
  );
};

export default SSconsumer(StarShipDetails);
