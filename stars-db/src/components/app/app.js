import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../PersonPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage />
      </div>
    );
  }
}

export default App;
