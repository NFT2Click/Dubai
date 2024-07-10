import React from 'react';
import AccommodationImage from './images/accommodation.jpg';

const Accommodation = () => {
  return (
    <div className="accommodation">
      <img src={AccommodationImage} alt="Accommodation" />
      <div className="details">
        <h2>Accommodation</h2>
        <p>Explore luxurious accommodation options for medical vacation.</p>
      </div>
    </div>
  );
};

export default Accommodation;
