import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SSConsumer } from "../swapiContext";
const PlanetDetails = () => {
  return (
    <SSConsumer>
      {(swapi) => {
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
      }}
    </SSConsumer>
  );
};
const PersonDetails = ({ personid }) => {
  return (
    <SSConsumer>
      {(swapi) => {
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
      }}
    </SSConsumer>
  );
};
const StarShipDetails = () => {
  return (
    <SSConsumer>
      {(swapi) => {
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
      }}
    </SSConsumer>
  );
};

export { PlanetDetails, PersonDetails, StarShipDetails };
