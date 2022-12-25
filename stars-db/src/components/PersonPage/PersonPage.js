import React, { Component } from "react";
import ListItem from "../list-item";
import PersonDetails from "../person-details";
class PersonPage extends Component {
  state = {
    personid: 5,
  };
  onClickPerson = (id) => {
    this.setState({
      personid: id,
    });
  };

  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ListItem onClickPerson={this.onClickPerson} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.personid} />
        </div>
      </div>
    );
  }
}

export default PersonPage;
