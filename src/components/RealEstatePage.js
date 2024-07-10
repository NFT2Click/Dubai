import React from 'react';
import '../styles/global.css';
import luxuryApartmentsImage from '../assets/luxury-apartments.jpg';
import businessPropertiesImage from '../assets/business-properties.jpg';
import virtualToursImage from '../assets/virtual-tours.jpg';

const RealEstatePage = () => {
  return (
    <div className="real-estate">
      <h1>Real Estate</h1>
      <div>
        <h2>Luxury Apartments</h2>
        <img src={luxuryApartmentsImage} alt="Luxury Apartments" />
      </div>
      <div>
        <h2>Business Properties</h2>
        <img src={businessPropertiesImage} alt="Business Properties" />
      </div>
      <div>
        <h2>Virtual Tours</h2>
        <img src={virtualToursImage} alt="Virtual Tours" />
      </div>
    </div>
  );
};

export default RealEstatePage;
