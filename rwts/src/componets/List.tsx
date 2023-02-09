import React from "react";
import { PState as PProps } from "../App";

const List: React.FC<PProps> = ({ people }) => {
  const renderP = (): JSX.Element[] => {
    return people.map((item) => {
      return (
        <li className="List">
          <img src={item.url} className="List-img" />
          <h2>{item.name}</h2>
          <p>{item.age} years old</p>
          <p className="List-note">{item.note}</p>
        </li>
      );
    });
  };
  return <div>{renderP()}</div>;
};

export default List;
