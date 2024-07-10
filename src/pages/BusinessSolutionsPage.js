import React from 'react';
import './BusinessSolutionsPage.css';
import businessSolutionsImage from './images/business-solutions.jpg'; // make sure the path is correct

function BusinessSolutionsPage() {
  return (
    <div className="business-solutions-container">
      <h1 className="business-solutions-title">Business Solutions</h1>
      <img src={businessSolutionsImage} alt="Business Solutions" className="business-solutions-image" />
      <div className="business-solutions-content">
        <section className="section">
          <h2 className="section-title">Our Concept</h2>
          <p>
            Our Business Solutions division is dedicated to helping companies navigate the complex landscape of modern commerce. 
            We provide tailored solutions that address unique business challenges, streamline operations, and drive growth. 
            Our services encompass a broad spectrum of areas, including strategy development, technological innovation, and 
            operational efficiency.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">History</h2>
          <p>
            Since our inception, we have been at the forefront of providing innovative business solutions. Our journey began with 
            a vision to bridge the gap between advanced technology and practical business applications. Over the years, we have 
            evolved by constantly adapting to the dynamic market needs, expanding our expertise, and forging strong partnerships 
            with industry leaders. Today, we stand as a trusted partner for businesses aiming to achieve excellence and sustainable growth.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Our Services</h2>
          <p>
            We offer a comprehensive suite of services designed to meet the diverse needs of our clients, including:
            <ul>
              <li>Business Strategy and Planning</li>
              <li>Technology Integration</li>
              <li>Process Optimization</li>
              <li>Market Research and Analysis</li>
              <li>Financial Consulting</li>
              <li>Digital Transformation</li>
            </ul>
          </p>
          <p>
            Our team of seasoned professionals works closely with clients to develop customized solutions that align with their 
            specific goals and industry requirements.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Why Choose Us?</h2>
          <p>
            Choosing our business solutions means partnering with a team that is committed to your success. We leverage the latest 
            technologies and industry best practices to deliver solutions that are not only effective but also scalable and sustainable. 
            Our holistic approach ensures that every aspect of your business is optimized for maximum efficiency and profitability.
          </p>
          <p>
            Our proven track record of success, combined with our dedication to innovation and excellence, makes us the ideal choice 
            for businesses looking to thrive in today’s competitive environment.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Client Testimonials</h2>
          <p>
            Don’t just take our word for it. Here’s what some of our clients have to say about working with us:
            <blockquote>
              “Their strategic insights and innovative solutions have been instrumental in our growth. We couldn’t have asked for a 
              better partner.” – CEO, Tech Innovators Inc.
            </blockquote>
            <blockquote>
              “The team’s expertise and commitment to excellence are evident in everything they do. They have truly transformed our 
              business operations.” – Managing Director, Global Enterprises Ltd.
            </blockquote>
          </p>
        </section>
      </div>
    </div>
  );
}

export default BusinessSolutionsPage;
