import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/swapi";
import Loading from "../loading";

const ErrorMessage = () => {
  return (
    <div style={{ margin: "40px" }} className="error">
      <h1>Sorry (:</h1>
      <h4>Something went wrong</h4>
    </div>
  );
};

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

class RandomPlanet extends Component {
  state = {
    planet: {},
    planetLoaging: true,
    error: false,
  };
  componentDidMount() {
    this.setPlanetState();
  }
  setPlanetState() {
    const id = Math.floor(Math.random() * 19 + 2);
    const req = new SwapiService();
    const planet = req.getPlanet(id);
    // req.getAllPlanets().then((dt) => console.log(dt));
    planet
      .then((planet) => {
        this.setState({ planet });
        this.setState({ planetLoaging: false });
      })
      .catch(() => this.setState({ error: true }));
  }
  render() {
    const { planet, planetLoaging, error } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        {error ? (
          <ErrorMessage />
        ) : planetLoaging ? (
          <Loading />
        ) : (
          <PlanetView planet={planet} />
        )}
      </div>
    );
  }
}

export default RandomPlanet;
