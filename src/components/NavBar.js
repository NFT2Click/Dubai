// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Dubai Project</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/real-estate">Real Estate</Link></li>
                <li><Link to="/medical-vacation">Medical Vacation</Link></li>
                <li><Link to="/business-solutions">Business Solutions</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
