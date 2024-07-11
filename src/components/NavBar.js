import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/NavBar.css'; // Ensure this path is correct
import dubaiFlag from '../images/dubai-flag.png';

const NavBar = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={dubaiFlag} alt="Dubai Flag" className="dubai-flag" />
        <span>Dubai Project</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">{t('Home')}</Link></li>
        <li><Link to="/services">{t('Services')}</Link></li>
        <li><Link to="/real-estate">{t('Real Estate')}</Link></li>
        <li><Link to="/medical-vacation">{t('Medical Vacation')}</Link></li>
        <li><Link to="/business-solutions">{t('Business Solutions')}</Link></li>
        <li><Link to="/about-us">{t('About Us')}</Link></li>
        <li><Link to="/contact">{t('Contact')}</Link></li>
      </ul>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('ar')}>{t('Arabic')}</button>
        <button onClick={() => changeLanguage('en')}>{t('English')}</button>
      </div>
    </nav>
  );
};

export default NavBar;
