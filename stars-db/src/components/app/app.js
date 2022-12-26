import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../PersonPage";
import ListItem from "../list-item";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";
class App extends Component {
  swapi = new SwapiService();
  render() {
    const listItem = (
      <ListItem
        getAllItems={this.swapi.getAllPlanets}
        renderItem={(item) => `${item.name} population: ${item.population}`}
      />
    );
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={1} />
      </ErrorBoundry>
    );

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage />
        <Row left={listItem} right={personDetails} />
      </div>
    );
  }
}

export default App;
