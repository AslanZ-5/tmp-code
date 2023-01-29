import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../pages/PersonPage";
import SwapiService from "../../services/swapi";
import { StarShipDetails } from "../sw-components";
import PlanetPage from "../pages/PlanetPage";
import { SSProvider } from "../swapiContext";
import StarshipPage from "../pages/StarshipPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
class App extends Component {
  swapi = new SwapiService();
  render() {
    return (
      <div>
        <SSProvider value={this.swapi}>
          <Router>
            <Header />
            <RandomPlanet />

            <Routes>
              <Route path="/" element={<h1>Welcome to Star Db!!</h1>} />
              <Route path="/people" element={<PersonPage />} />
              <Route path="/starships" element={<StarshipPage />} />
              <Route path="/starships" element={<StarshipPage />} />
              <Route
                path="/starships/:starshipid"
                element={<StarShipDetails />}
              />
              <Route path="/planets" element={<PlanetPage />} />
            </Routes>
          </Router>
        </SSProvider>
      </div>
    );
  }
}

export default App;
