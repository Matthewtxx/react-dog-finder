import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  const dogLinks = dogs.map((dog) => (
    <li key={dog.name}>
      <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Click on a dog to view details:</h2>
      <ul>{dogLinks}</ul>
    </div>
  );
};

export default DogList;
