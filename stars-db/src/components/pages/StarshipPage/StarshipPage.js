import React, { Component } from "react";
import { StarShipList } from "../../sw-components";
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
    return <StarShipList onClickItem={this.onclickStarship} />;
  }
}

export default StarshipPage;
