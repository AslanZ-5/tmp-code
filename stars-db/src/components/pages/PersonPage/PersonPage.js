import React, { Component } from "react";
import { PeopleList, PersonDetails } from "../../sw-components";
import ErrorBoundry from "../../ErrorBoundry";
import Row from "../../Row";
class PersonPage extends Component {
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
    const listItem = <PeopleList onClickItem={this.onClickPerson} />;
    const personDetails = (
      <ErrorBoundry>
        <React.Profiler id="persondDetails" onRender={onRender}>
        <PersonDetails itemId={personid} />
        </React.Profiler>
      </ErrorBoundry>
    );

    return <Row left={listItem} right={personDetails} />;
  }
}

export default PersonPage;
