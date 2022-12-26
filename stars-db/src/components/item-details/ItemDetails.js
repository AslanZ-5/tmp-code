import React, { Component } from "react";
import "./ItemDetails.css";
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
    const { imageUrl } = this.props;
    if (!this.state.item) {
      return <div className="l">Loading...</div>;
    }
    const { name, gender, birthYear, eyeColor, id } = this.state.item;
    return (
      <div className="item-details card">
        <img className="item-image" alt="d" src={imageUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
