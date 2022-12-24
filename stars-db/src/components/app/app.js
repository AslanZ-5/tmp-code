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
    personid: 5,
  };
  onClickPerson(id) {
    this.setState({
      personid: id,
    });
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
            <PersonDetails personId={this.state.personid} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
