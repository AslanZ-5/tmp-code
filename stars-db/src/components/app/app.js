import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../pages/PersonPage";
import SwapiService from "../../services/swapi";
import PlanetPage from "../pages/PlanetPage";
import { SSProvider } from "../swapiContext";
import StarshipPage from "../pages/StarshipPage";

class App extends Component {
  swapi = new SwapiService();
  render() {
    return (
      <div>
        <SSProvider value={this.swapi}>
          <Header />
          <RandomPlanet />

          <PersonPage />
          <PlanetPage />
          <StarshipPage />
        </SSProvider>
      </div>
    );
  }
}

export default App;
