import React from 'react';
import TimelineImage from './images/timeline.jpg';

const CompanyHistory = () => {
  return (
    <div className="company-history">
      <img src={TimelineImage} alt="Company History Timeline" />
      <div className="details">
        <h2>Company History</h2>
        <p>Explore our journey and milestones over the years.</p>
      </div>
    </div>
  );
};

export default CompanyHistory;
