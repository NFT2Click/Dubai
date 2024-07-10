import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Dubai Project
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/real-estate" className="navbar-link">Real Estate</Link>
          </li>
          <li className="navbar-item">
            <Link to="/medical-vacation" className="navbar-link">Medical Vacation</Link>
          </li>
          <li className="navbar-item">
            <Link to="/business-solutions" className="navbar-link">Business Solutions</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-us" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
