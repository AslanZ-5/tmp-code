import React, { Component } from "react";
import ListItem from "../list-item";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";
import { Record } from "../item-details/ItemDetails";

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
    const listItem = (
      <ListItem
        renderItem={(item) => `${item.name} ${item.gender} ${item.birthYear}`}
        getAllItems={this.swapi.getAllPeople}
        onClickPerson={this.onClickPerson}
      />
    );
    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          getItem={this.swapi.getPerson}
          itemId={personid}
          imageUrl={this.swapi.getPersonImage(personid)}
        >
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={listItem} right={personDetails} />;
  }
}

export default PersonPage;
