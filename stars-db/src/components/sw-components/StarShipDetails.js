import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";

const StarShipDetails = (props) => {
  return (
    <ItemDetails {...props} itemId={props.starshipid}>
      <Record field="model" label="Model" />
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="crew" label="Crew" />
    </ItemDetails>
  );
};
const MapStarShipDetailsData = (sw) => {
  return {
    getItem: sw.getStarship,
    imageUrl: sw.getStarShipImage,
  };
};
export default SSconsumer(StarShipDetails, MapStarShipDetailsData);
