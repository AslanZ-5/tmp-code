// import React from "react";
import SwapiService from "../../services/swapi";
import { withData } from "../HOC";
import SSconsumer from "../HOC";
import ListItem from "../list-item";
const swapi = new SwapiService();
const mapPeopleData = (sw) => {
  return {
    getAllData: sw.getAllPeople,
  };
};
const PeopleList = SSconsumer(
  withData(ListItem, (item) => `${item.name} ${item.gender} ${item.birthYear}`),
  mapPeopleData
);
const mapPlanetData = (sw) => {
  return {
    getAllData: sw.getAllPlanets,
  };
};
const PlanetList = SSconsumer(
  withData(ListItem, (item) => `${item.name} populatiton: ${item.population}`),
  mapPlanetData
);
const mapStarshipData = (sw) => {
  return {
    getAllData: sw.getAllStarships,
  };
};
const StarShipList = SSconsumer(
  withData(ListItem, (item) => `starShip:${item.name}`),
  mapStarshipData
);

export { PlanetList, PeopleList, StarShipList };
