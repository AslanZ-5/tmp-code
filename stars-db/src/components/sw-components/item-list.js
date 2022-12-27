// import React from "react";
import SwapiService from "../../services/swapi";
import { withData } from "../HOC";
import ListItem from "../list-item";
const swapi = new SwapiService();
const PeopleList = withData(
  ListItem,
  swapi.getAllPeople,
  (item) => `${item.name} ${item.gender} ${item.birthYear}`
);
const PlanetList = withData(
  ListItem,
  swapi.getAllPlanets,
  (item) => `${item.name} populatiton: ${item.population}`
);
const StarShipList = withData(
  ListItem,
  swapi.getAllStarships,
  (item) => `starShip:${item.name}`
);

export { PlanetList, PeopleList, StarShipList };
