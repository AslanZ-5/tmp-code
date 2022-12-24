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
    this.setStarsState();
  }
  setStarsState() {
    const id = Math.floor(Math.random() * 19 + 2);
    console.log(id);
    const req = new SwapiService();
    const planet = req.getPlanet(id);
    planet.then((data) => {
      this.setState({
        id,
        name: data.name,
        population: data.population,
        rotationPeriod: data.rotation_period,
        diameter: data.diameter,
      });
    });
  }
  render() {
    const { name, population, rotationPeriod, diameter, id } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          alt="d"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
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
