import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setClick(false)}>
          Dubai Project
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setClick(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={() => setClick(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/real-estate" className="nav-links" onClick={() => setClick(false)}>
              Real Estate
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/medical-vacation" className="nav-links" onClick={() => setClick(false)}>
              Medical Vacation
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/business-solutions" className="nav-links" onClick={() => setClick(false)}>
              Business Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-links" onClick={() => setClick(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setClick(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
