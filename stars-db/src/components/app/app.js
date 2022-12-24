import React, { Component } from "react";
import Header from "../header";
import ListItem from "../list-item";
import PersonDetails from "../person-details";
import RandomPlanet from "../random-planet";
class App extends Component {
  constructor() {
    super();
    this.onClickPerson = this.onClickPerson.bind(this);
  }
  state = {
    personid: null,
  };
  onClickPerson(id) {
    this.setState(
      {
        personid: id,
      },
      () => console.log(this.state.personid)
    );
  }
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ListItem onClickPerson={this.onClickPerson} />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
