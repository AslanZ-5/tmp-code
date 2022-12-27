import React, { Component } from "react";
import "./ListItem.css";
class ListItem extends Component {
  render() {
    const { renderLabel } = this.props;
    // console.log(this.props.children);
    const { data } = this.props;

    const itemEls = data.map((item) => {
      const label = renderLabel(item);
      return (
        <li
          key={item.id}
          className="list-group-item"
          onClick={() => this.props.onClickPerson(item.id)}
        >
          {label}
        </li>
      );
    });

    return <ul className="item-list list-group">{itemEls}</ul>;
  }
}

export default ListItem;
