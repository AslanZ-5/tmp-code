import React, { Component } from "react";
import "./ListItem.css";
class ListItem extends Component {
  state = {
    people: null,
  };

  componentDidMount() {
    this.props.getAllItems().then((data) => this.setState({ people: data }));
  }

  render() {
    const { renderItem } = this.props;
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
          {renderItem(per)}
        </li>
      );
    });

    return <ul className="item-list list-group">{peopleEls}</ul>;
  }
}

export default ListItem;
