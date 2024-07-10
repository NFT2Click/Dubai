import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Message:</label>
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
