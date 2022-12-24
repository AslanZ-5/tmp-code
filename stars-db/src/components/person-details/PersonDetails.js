import React, { Component } from "react";
import "./PersonDetails.css";
import SwapiService from "../../services/swapi";
class PersonDetails extends Component {
  state = {
    person: null,
  };
  p = new SwapiService();
  componentDidMount = () => {
    this.showPersonDet();
  };
  componentDidUpdate = (props) => {
    if (this.props.personId !== props.personId) {
      this.showPersonDet();
    }
  };
  showPersonDet = () => {
    const { personId: id } = this.props;
    this.p.getPerson(id).then((data) => {
      this.setState({
        person: data,
      });
    });
  };
  render() {
    if (!this.state.person) {
      return <div className="l">Loading...</div>;
    }
    const { name, gender, birthYear, eyeColor, id } = this.state.person;
    return (
      <div className="person-details card">
        <img
          className="person-image"
          alt="d"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

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

export default PersonDetails;
