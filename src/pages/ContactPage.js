import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We are here to assist you with any inquiries or cooperation needs. Please fill out the form below or reach out to us using the contact information provided.</p>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> inad@fragrancia.co</p>
        <p><strong>Phone:</strong> +971 50 757 1289</p>
        <p><strong>Address:</strong> 1406/1407 B2B Tower, Business Bay, Dubai, UAE</p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
