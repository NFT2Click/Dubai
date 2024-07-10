import React from 'react';
import companyHistoryImage from './images/company-history.jpg';
import missionVisionImage from './images/mission-vision.jpg';
import teamProfilesImage from './images/team-profiles.jpg';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <h2>Company History</h2>
        <img src={companyHistoryImage} alt="Company History" />
        <p>Our company has a rich history of delivering exceptional services and solutions to our clients. Founded in Dubai, we have grown to become a leader in our industry, thanks to our commitment to excellence and innovation.</p>
      </div>
      <div className="about-section">
        <h2>Mission & Vision</h2>
        <img src={missionVisionImage} alt="Mission Vision" />
        <p>Our mission is to bridge the gap between accurate information and valuable leads, ensuring near 100% success by leveraging transparency and advanced technologies. Our vision is to foster global cooperation and enhance marketing opportunities for businesses in Dubai.</p>
      </div>
      <div className="about-section">
        <h2>Team Profiles</h2>
        <img src={teamProfilesImage} alt="Team Profiles" />
        <p>Our team is comprised of highly skilled professionals with a diverse range of expertise. We are dedicated to providing personalized assistance and support to our clients, ensuring their success in achieving their goals.</p>
      </div>
    </div>
  );
};

export default AboutPage;
