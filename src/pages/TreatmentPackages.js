import React from 'react';
import TreatmentPackageImage from './images/treatment-package.jpg';

const TreatmentPackages = () => {
  return (
    <div className="treatment-packages">
      <img src={TreatmentPackageImage} alt="Treatment Package" />
      <div className="details">
        <h2>Treatment Packages</h2>
        <p>Discover our comprehensive medical treatment packages.</p>
      </div>
    </div>
  );
};

export default TreatmentPackages;
