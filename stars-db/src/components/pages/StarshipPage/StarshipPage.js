import React, { Component } from "react";
import Row from "../../Row";
import { StarShipList, StarShipDetails } from "../../sw-components";
class StarshipPage extends Component {
  constructor(props) {
    super(props);
    this.onclickStarship = this.onclickStarship.bind(this);
  }
  state = {
    starshipid: 12,
  };
  onclickStarship(id) {
    this.setState({ starshipid: id });
  }
  render() {
    const starShipList = <StarShipList onClickItem={this.onclickStarship} />;
    const sSDetails = <StarShipDetails starshipid={this.state.starshipid} />;
    return <Row left={starShipList} right={sSDetails} />;
  }
}

export default StarshipPage;
