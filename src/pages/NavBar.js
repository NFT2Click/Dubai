import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Dubai Project</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/real-estate" onClick={toggleMenu}>Real Estate</Link></li>
        <li><Link to="/medical-vacation" onClick={toggleMenu}>Medical Vacation</Link></li>
        <li><Link to="/business-solutions" onClick={toggleMenu}>Business Solutions</Link></li>
        <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
