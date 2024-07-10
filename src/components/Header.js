import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Dubai Project</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/real-estate">Real Estate</Link></li>
            <li><Link to="/medical-vacation">Medical Vacation</Link></li>
            <li><Link to="/business-solutions">Business Solutions</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
