import React from 'react';
import '../styles/global.css';
import treatmentPackagesImage from '../assets/treatment-packages.jpg';
import accommodationImage from '../assets/accommodation.jpg';
import testimonialsImage from '../assets/testimonials.jpg';

const MedicalVacationPage = () => {
  return (
    <div className="medical-vacation">
      <h1>Medical Vacation</h1>
      <div>
        <h2>Treatment Packages</h2>
        <img src={treatmentPackagesImage} alt="Treatment Packages" />
      </div>
      <div>
        <h2>Accommodation</h2>
        <img src={accommodationImage} alt="Accommodation" />
      </div>
      <div>
        <h2>Testimonials</h2>
        <img src={testimonialsImage} alt="Testimonials" />
      </div>
    </div>
  );
};

export default MedicalVacationPage;
