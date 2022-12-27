import React, { Component } from "react";
import { PeopleList, PersonDetails } from "../sw-components";
import SwapiService from "../../services/swapi";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";

class PersonPage extends Component {
  swapi = new SwapiService();
  state = {
    personid: 10,
  };
  onClickPerson = (id) => {
    this.setState({
      personid: id,
    });
  };

  render() {
    const { personid } = this.state;
    const listItem = <PeopleList onClickPerson={this.onClickPerson} />;
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personid={personid} />
      </ErrorBoundry>
    );

    return <Row left={listItem} right={personDetails} />;
  }
}

export default PersonPage;
