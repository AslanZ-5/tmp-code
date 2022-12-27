import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";
const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
const MapPersonDetailsData = (sw) => {
  return {
    getItem: sw.getPerson,
    imageUrl: sw.getPersonImage,
  };
};
export default SSconsumer(PersonDetails, MapPersonDetailsData);
