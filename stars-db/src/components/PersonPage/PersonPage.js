import React, { Component } from "react";
import ListItem from "../list-item";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";

class PersonPage extends Component {
  swapi = new SwapiService();
  state = {
    personid: 5,
  };
  onClickPerson = (id) => {
    this.setState({
      personid: id,
    });
  };

  render() {
    const listItem = (
      <ListItem
        renderItem={(item) => `${item.name} ${item.gender} ${item.birthYear}`}
        getAllItems={this.swapi.getAllPeople}
        onClickPerson={this.onClickPerson}
      />
    );
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.personid} />;
      </ErrorBoundry>
    );

    return <Row left={listItem} right={personDetails} />;
  }
}

export default PersonPage;
