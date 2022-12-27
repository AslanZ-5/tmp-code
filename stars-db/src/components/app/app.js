import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonPage from "../PersonPage";
import ListItem from "../list-item";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi";
import Row from "../Row";
import ErrorBoundry from "../ErrorBoundry";
import { Record } from "../item-details/ItemDetails";
class App extends Component {
  swapi = new SwapiService();
  render() {
    const listItem = (
      <ListItem
        getAllItems={this.swapi.getAllPlanets}
        renderItem={(item) => `${item.name} population: ${item.population}`}
      />
    );
    const planetDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={5}
          getItem={this.swapi.getPlanet}
          imageUrl={this.swapi.getPlanetImage(5)}
        >
          <Record field={"diameter"} label={"Diameter"} />
          <Record field={"rotationPeriod"} label={"R-Period"} />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <div>
        <Header />
        <RandomPlanet />

        <PersonPage />
        <Row left={listItem} right={planetDetails} />
      </div>
    );
  }
}

export default App;
