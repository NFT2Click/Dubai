import React from 'react';
import '../styles/RealEstatePage.css';
import luxuryApartmentsImage from '../assets/luxury-apartments.jpg';
import businessPropertiesImage from '../assets/business-properties.jpg';
import virtualToursImage from '../assets/virtual-tours.jpg';

const RealEstatePage = () => {
  return (
    <div className="real-estate-page">
      <h1>Real Estate</h1>
      <div className="real-estate-section">
        <img src={luxuryApartmentsImage} alt="Luxury Apartments" />
        <p>Explore our collection of luxury apartments available for rent or purchase...</p>
      </div>
      <div className="real-estate-section">
        <img src={businessPropertiesImage} alt="Business Properties" />
        <p>Discover business properties tailored for your needs...</p>
      </div>
      <div className="real-estate-section">
        <img src={virtualToursImage} alt="Virtual Tours" />
        <p>Take virtual tours of our properties from the comfort of your home...</p>
      </div>
    </div>
  );
};

export default RealEstatePage;
