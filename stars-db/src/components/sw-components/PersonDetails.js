import React from "react";
import ItemDetails, { Record } from "../item-details";
import SSconsumer from "../HOC/SSconsumer";
const PersonDetails = ({ personid, swapi }) => {
  return (
    <ItemDetails
      getItem={swapi.getPerson}
      itemId={personid}
      imageUrl={swapi.getPersonImage(personid)}
    >
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default SSconsumer(PersonDetails);
