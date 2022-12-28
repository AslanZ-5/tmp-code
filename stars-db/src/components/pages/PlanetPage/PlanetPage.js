import React, { Component } from "react";
import ErrorBoundry from "../../ErrorBoundry";
import Row from "../../Row";
import { PlanetDetails, PlanetList } from "../../sw-components";

class PlanetPage extends Component {
  constructor(props) {
    super(props);
    this.onClickPlanet = this.onClickPlanet.bind(this);
  }
  state = {
    planetid: 5,
  };
  onClickPlanet(id) {
    this.setState({
      planetid: id,
    });
  }

  render() {
    const listItem = <PlanetList onClickItem={this.onClickPlanet} />;
    const planetDetails = (
      <ErrorBoundry>
        <PlanetDetails planetid={this.state.planetid} />
      </ErrorBoundry>
    );
    return <Row left={listItem} right={planetDetails} />;
  }
}

export default PlanetPage;
