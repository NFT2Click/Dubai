import React from 'react';
import BusinessPropertyImage from './images/business-property.jpg';

const BusinessProperties = () => {
  return (
    <div className="business-properties">
      <img src={BusinessPropertyImage} alt="Business Property" />
      <div className="details">
        <h2>Business Properties</h2>
        <p>Find commercial properties perfect for business operations.</p>
      </div>
    </div>
  );
};

export default BusinessProperties;
