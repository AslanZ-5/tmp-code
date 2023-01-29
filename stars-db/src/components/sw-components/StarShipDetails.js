import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";
import { useParams } from "react-router-dom";

const StarShipDetails = (props) => {
  const params = useParams();
  // const id = props.starshipid ? props.starshipid : params.starshipid;
  return (
    <ItemDetails {...props} itemId={params.starshipid}>
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
