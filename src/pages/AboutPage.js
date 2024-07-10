import React from 'react';
import './AboutPage.css'; // Ensure this file is in src/pages directory
import aboutUsImage from './images/about-us.jpg'; // Ensure this file is in src/pages/images directory
import teamProfilesImage from './images/team-profiles.jpg'; // Ensure this file is in src/pages/images directory
import companyHistoryImage from './images/company-history.jpg'; // Ensure this file is in src/pages/images directory

const AboutPage = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <img src={aboutUsImage} alt="About Us" className="about-image" />
      <p>
        Welcome to our company. We are dedicated to providing top-notch services and solutions to our clients. With years of experience in the industry, we pride ourselves on our professional approach and commitment to excellence.
      </p>
      
      <h3>Our Mission</h3>
      <p>
        Our mission is to drive innovation and deliver exceptional services that empower our clients to achieve their goals. We strive to build long-lasting relationships based on trust, transparency, and mutual respect.
      </p>
      
      <h3>Our Vision</h3>
      <p>
        To be recognized as a global leader in our industry, known for our innovative solutions, customer-centric approach, and unwavering commitment to quality. We envision a future where our clients' success is synonymous with our own.
      </p>
      
      <h3>Our Values</h3>
      <p>
        Integrity, excellence, and teamwork are at the core of everything we do. We believe in fostering a culture of continuous improvement, where every team member is encouraged to contribute their unique skills and perspectives.
      </p>
      
      <img src={teamProfilesImage} alt="Team Profiles" className="team-image" />
      <h3>Our Team</h3>
      <p>
        Our team is comprised of highly skilled professionals who are experts in their respective fields. We work together to deliver the best results for our clients. Each team member brings a wealth of knowledge and experience, ensuring that we remain at the forefront of industry developments.
      </p>
      
      <img src={companyHistoryImage} alt="Company History" className="history-image" />
      <h3>Company History</h3>
      <p>
        Our company has a rich history of success and innovation. From our humble beginnings to our current status as a leader in the industry, we have always focused on growth and improvement. Our journey is marked by significant milestones that reflect our commitment to excellence and our ability to adapt to changing market dynamics.
      </p>
    </div>
  );
};

export default AboutPage;
