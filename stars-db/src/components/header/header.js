import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/re">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/tre">People</a>
        </li>
        <li>
          <a href="/ds">Planets</a>
        </li>
        <li>
          <a href="/gfd">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
