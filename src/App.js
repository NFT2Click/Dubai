import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import RealEstatePage from './pages/RealEstatePage';
import MedicalVacationPage from './pages/MedicalVacationPage';
import BusinessSolutionsPage from './pages/BusinessSolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import './styles/global.css';

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="App">
        <NavBar changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/real-estate" element={<RealEstatePage />} />
          <Route path="/medical-vacation" element={<MedicalVacationPage />} />
          <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
