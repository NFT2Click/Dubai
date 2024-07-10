import React from 'react';
import '../styles/MedicalVacationPage.css';
import medicalVacationImage from './images/medical-vacation.jpg';

const MedicalVacationPage = () => {
    return (
        <div className="medical-vacation-container">
            <h1>Medical Vacation</h1>
            <div className="content">
                <img src={medicalVacationImage} alt="Medical Vacation" className="responsive-image" />
                <p>Our medical vacation packages combine top-notch medical care with luxurious stay options. These comprehensive packages ensure patients receive the best treatments while enjoying a relaxing vacation in Dubai.</p>
            </div>
        </div>
    );
};

export default MedicalVacationPage;
