import React from "react";
import Header from "../header";
import ListItem from "../list-item";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ListItem />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
