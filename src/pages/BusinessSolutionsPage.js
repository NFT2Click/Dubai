import React from 'react';
import '../styles/BusinessSolutionsPage.css';
import businessSolutionsImage from './images/business-solutions.jpg';

const BusinessSolutionsPage = () => {
    return (
        <div className="business-solutions-container">
            <h1>Business Solutions</h1>
            <div className="content">
                <img src={businessSolutionsImage} alt="Business Solutions" className="responsive-image" />
                <p>We provide tailored business solutions for specific needs, including one-time use solutions and ongoing support. Our services help streamline business operations and ensure regulatory compliance, utilizing blockchain technology to secure and provide transparency in all transactions.</p>
            </div>
        </div>
    );
};

export default BusinessSolutionsPage;
