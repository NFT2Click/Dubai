import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import RealEstatePage from './pages/RealEstatePage';
import MedicalVacationPage from './pages/MedicalVacationPage';
import BusinessSolutionsPage from './pages/BusinessSolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; // Make sure this import is present
import NavBar from './components/NavBar';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
        <Route path="/medical-vacation" element={<MedicalVacationPage />} />
        <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
