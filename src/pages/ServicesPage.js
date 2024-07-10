import React from 'react';
import '../styles/ServicesPage.css';
import realEstateImage from '../pages/images/real-estate.jpg';
import medicalVacationImage from '../pages/images/medical-vacation.jpg';
import businessSolutionsImage from '../pages/images/business-solutions.jpg';

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-item">
        <img src={realEstateImage} alt="Real Estate" />
        <h3>Real Estate</h3>
        <p>We offer a diverse range of real estate solutions tailored for luxury apartments, business properties, and virtual tours. Our catalogue includes high-end residential properties available for sale or lease, and commercial properties suited for business operations.</p>
      </div>
      <div className="service-item">
        <img src={medicalVacationImage} alt="Medical Vacation" />
        <h3>Medical Vacation</h3>
        <p>Our medical vacation packages combine top-notch medical care with luxurious stay options. These comprehensive packages ensure patients receive the best treatments while enjoying a relaxing vacation in Dubai.</p>
      </div>
      <div className="service-item">
        <img src={businessSolutionsImage} alt="Business Solutions" />
        <h3>Business Solutions</h3>
        <p>We provide tailored business solutions for specific needs, including one-time use solutions and ongoing support. Our services help streamline business operations and ensure regulatory compliance, utilizing blockchain technology to secure and provide transparency in all transactions.</p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Get in touch with us to explore how we can assist you in achieving your goals in Dubai. Whether you have inquiries about our services, want to discuss partnership opportunities, or need more information, our team is here to provide personalized assistance and support.</p>
        <p>
          <strong>Phone:</strong> +971 50 757 1289<br />
          <strong>Email:</strong> Inad@fragrancia.co<br />
          <strong>Address:</strong> 1406/1407 B2B Tower, Business Bay, Dubai
        </p>
      </div>
    </div>
  );
}

export default ServicesPage;
