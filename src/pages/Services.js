import React from 'react';
import RealEstateImage from './images/real-estate.jpg';
import MedicalVacationImage from './images/medical-vacation.jpg';
import BusinessSolutionsImage from './images/business-solutions.jpg';

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={RealEstateImage} alt="Real Estate" />
        <h3>Real Estate</h3>
        <p>Explore luxury apartments and business properties.</p>
      </div>
      <div className="service">
        <img src={MedicalVacationImage} alt="Medical Vacation" />
        <h3>Medical Vacation</h3>
        <p>Discover treatment packages and luxurious accommodations.</p>
      </div>
      <div className="service">
        <img src={BusinessSolutionsImage} alt="Business Solutions" />
        <h3>Business Solutions</h3>
        <p>Find tailored solutions for business cooperation and regulation.</p>
      </div>
    </div>
  );
};

export default Services;
