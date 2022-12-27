import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi";
const swapi = new SwapiService();
const PlanetDetails = () => {
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
const PersonDetails = ({ personid }) => {
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
const StarShipDetails = () => {
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

export { PlanetDetails, PersonDetails, StarShipDetails };
