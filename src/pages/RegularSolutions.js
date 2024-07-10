import React from 'react';
import RegularSolutionsImage from './images/regular-solutions.jpg';

const RegularSolutions = () => {
  return (
    <div className="regular-solutions">
      <img src={RegularSolutionsImage} alt="Regular Solutions" />
      <div className="details">
        <h2>Regular Solutions</h2>
        <p>Ongoing support and services for business operations.</p>
      </div>
    </div>
  );
};

export default RegularSolutions;
