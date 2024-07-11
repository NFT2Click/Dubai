// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import i18n from 'i18next'; // Make sure to import i18n

const NavBar = ({ changeLanguage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">{i18n.t('home')}</Link></li>
        <li><Link to="/services">{i18n.t('services')}</Link></li>
        <li><Link to="/real-estate">{i18n.t('realEstate')}</Link></li>
        <li><Link to="/medical-vacation">{i18n.t('medicalVacation')}</Link></li>
        <li><Link to="/business-solutions">{i18n.t('businessSolutions')}</Link></li>
        <li><Link to="/about-us">{i18n.t('aboutUs')}</Link></li>
        <li><Link to="/contact">{i18n.t('contact')}</Link></li>
      </ul>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('ar')}>Arabic</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>
    </nav>
  );
};

export default NavBar;
