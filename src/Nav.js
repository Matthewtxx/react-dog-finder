import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; 

const Nav = ({ dogs }) => {
  return (
    <div className="navbar">
      {dogs.map((dog) => (
        <Link key={dog.name} to={`/dogs/${dog.name}`} className="nav-link">
          {dog.name}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
