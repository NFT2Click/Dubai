import React from 'react';
import LuxuryApartmentImage from './images/luxury-apartment.jpg';

const LuxuryApartments = () => {
  return (
    <div className="luxury-apartments">
      <img src={LuxuryApartmentImage} alt="Luxury Apartment" />
      <div className="details">
        <h2>Luxury Apartments</h2>
        <p>Explore our selection of high-end residential properties.</p>
      </div>
    </div>
  );
};

export default LuxuryApartments;
