import React from 'react';
import '../styles/global.css';
import oneTimeUseImage from '../assets/one-time-use.jpg';
import regularSolutionsImage from '../assets/regular-solutions.jpg';
import blockchainTechnologyImage from '../assets/blockchain-technology.jpg';

const BusinessSolutionsPage = () => {
  return (
    <div className="business-solutions">
      <h1>Business Solutions</h1>
      <div>
        <h2>One-Time Use Solutions</h2>
        <img src={oneTimeUseImage} alt="One-Time Use Solutions" />
      </div>
      <div>
        <h2>Regular Solutions</h2>
        <img src={regularSolutionsImage} alt="Regular Solutions" />
      </div>
      <div>
        <h2>Blockchain Technology</h2>
        <img src={blockchainTechnologyImage} alt="Blockchain Technology" />
      </div>
    </div>
  );
};

export default BusinessSolutionsPage;
