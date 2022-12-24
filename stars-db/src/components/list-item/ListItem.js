import React, { Component } from "react";
import "./ListItem.css";
import SwapiService from "../../services/swapi";
class ListItem extends Component {
  state = {
    people: null,
  };
  componentDidMount() {
    let people = new SwapiService();
    people.getAllPeople().then((data) => this.setState({ people: data }));
  }

  render() {
    if (!this.state.people) {
      return <h1>LOADS...</h1>;
    }
    const { people } = this.state;
    const peopleEls = people.map((per) => {
      return (
        <li
          key={per.id}
          className="list-group-item"
          onClick={() => this.props.onClickPerson(per.id)}
        >
          {per.name}
        </li>
      );
    });

    return <ul className="item-list list-group">{peopleEls}</ul>;
  }
}

export default ListItem;
