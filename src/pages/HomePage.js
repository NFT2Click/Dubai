// HomePage.js

import React from 'react';
import '../styles/HomePage.css';
import bannerImage from './images/banner.jpg'; // Adjusted path

const HomePage = () => {
    return (
        <div className="container">
            <div className="home-banner">
                <img src={bannerImage} alt="Dubai Project Banner" />
                <h1>Welcome to Dubai Project</h1>
                <p>Enhancing Marketing Cooperation in Dubai</p>
            </div>

            <div className="about-us">
                <h2>About Us</h2>
                <p>
                    Our project is designed to address the marketing challenges faced by businesses in Dubai, 
                    especially in fostering global cooperation. We aim to bridge the gap between accurate information 
                    and valuable leads, ensuring near 100% success by leveraging transparency and advanced technologies.
                </p>
            </div>

            <div className="our-services">
                <h2>Our Services</h2>
                <div className="service">
                    <h3>Real Estate</h3>
                    <img src="./images/real-estate.jpg" alt="Real Estate" /> {/* Adjusted path */}
                    <p>
                        We offer a diverse range of real estate solutions tailored for luxury apartments, business properties, 
                        and virtual tours. Our catalogue includes high-end residential properties available for sale or lease, 
                        and commercial properties suited for business operations.
                    </p>
                </div>

                <div className="service">
                    <h3>Medical Vacation</h3>
                    <img src="./images/medical-vacation.jpg" alt="Medical Vacation" /> {/* Adjusted path */}
                    <p>
                        Our medical vacation packages combine top-notch medical care with luxurious stay options. These 
                        comprehensive packages ensure patients receive the best treatments while enjoying a relaxing vacation 
                        in Dubai.
                    </p>
                </div>

                <div className="service">
                    <h3>Business Solutions</h3>
                    <img src="./images/business-solutions.jpg" alt="Business Solutions" /> {/* Adjusted path */}
                    <p>
                        We provide tailored business solutions for specific needs, including one-time use solutions and ongoing 
                        support. Our services help streamline business operations and ensure regulatory compliance, utilizing 
                        blockchain technology to secure and provide transparency in all transactions.
                    </p>
                </div>
            </div>

            <div className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    Get in touch with us to explore how we can assist you in achieving your goals in Dubai. Whether you have inquiries 
                    about our services, want to discuss partnership opportunities, or need more information, our team is here to provide 
                    personalized assistance and support.
                </p>
                <p>
                    <strong>Phone:</strong> +971 50 757 1289<br />
                    <strong>Email:</strong> Inad@fragrancia.co<br />
                    <strong>Address:</strong> 1406/1407 B2B Tower, Business Bay, Dubai
                </p>
            </div>
        </div>
    );
};

export default HomePage;
