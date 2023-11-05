import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DogDetails.css"; // Import the CSS file

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name === name);

  if (!dog) {
    return (
      <div>
        <h2 className="dog-details-title">Dog not found. Please select a valid dog.</h2>
        <Link to="/dogs" className="back-link">Back to Dogs</Link>
      </div>
    );
  }

  const dogFacts = dog.facts.map((fact, index) => (
    <li key={index} className="dog-facts-item">{fact}</li>
  ));

  return (
    <div className="dog-details-container">
      <h2 className="dog-details-title">{dog.name}</h2>
      <img src={dog.src} alt={dog.name} className="dog-image" />
      <h3>Age: {dog.age} years</h3>
      <h3 className="dog-details-title">Facts:</h3>
      <ul className="dog-facts">{dogFacts}</ul>
      <Link to="/dogs" className="back-link">Back to Dogs</Link>
    </div>
  );
};

export default DogDetails;


