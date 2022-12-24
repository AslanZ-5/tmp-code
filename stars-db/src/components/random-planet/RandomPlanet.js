import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/swapi";
class RandomPlanet extends Component {
  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };
  componentDidMount() {
    this.setPlanetState();
  }
  setPlanetState() {
    const id = Math.floor(Math.random() * 19 + 2);
    const req = new SwapiService();
    req.getPerson(3);
    const planet = req.getPlanet(id);
    // req.getAllPlanets().then((dt) => console.log(dt));
    planet.then((data) => this.setState(data));
  }
  render() {
    const { name, population, rotationPeriod, diameter, id } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        {id && (
          <img
            className="planet-image"
            alt="d"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          />
        )}
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
