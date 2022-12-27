import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../PersonPage";
import SwapiService from "../../services/swapi";
import {
  PlanetList,
  StarShipDetails,
  PlanetDetails,
  StarShipList,
} from "../sw-components";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";

class App extends Component {
  swapi = new SwapiService();
  render() {
    const listItem = <PlanetList />;
    const planetDetails = (
      <ErrorBoundry>
        <PlanetDetails />
      </ErrorBoundry>
    );
    const starShipList = <StarShipList />;
    const sSDetails = <StarShipDetails />;

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage />
        <Row left={listItem} right={planetDetails} />
        <Row left={starShipList} right={sSDetails} />
      </div>
    );
  }
}

export default App;
