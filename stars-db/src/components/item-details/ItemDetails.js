import React, { Component } from "react";
import "./ItemDetails.css";

const Record = ({ field, label, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

class ItemDetails extends Component {
  state = {
    item: null,
  };

  componentDidMount = () => {
    this.showItemDet();
  };
  componentDidUpdate = (props) => {
    if (this.props.itemId !== props.itemId) {
      this.showItemDet();
    }
  };
  showItemDet = () => {
    const { itemId: id } = this.props;
    this.props.getItem(id).then((data) => {
      this.setState({
        item: data,
      });
    });
  };
  render() {
    const imageUrl = this.props.imageUrl(this.props.itemId);
    if (!this.state.item) {
      return <div className="l">Loading...</div>;
    }
    const { name } = this.state.item;
    return (
      <div className="item-details card">
        <img className="item-image" alt="d" src={imageUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item: this.state.item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
