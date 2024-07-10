import React from 'react';
import './MedicalVacationPage.css';
import medicalVacationImage from './images/medical-vacation.jpg'; // make sure the path is correct

function MedicalVacationPage() {
  return (
    <div className="medical-vacation-container">
      <h1 className="medical-vacation-title">Medical Vacation</h1>
      <img src={medicalVacationImage} alt="Medical Vacation" className="medical-vacation-image" />
      <div className="medical-vacation-content">
        <section className="section">
          <h2 className="section-title">Our Concept</h2>
          <p>
            Our medical vacation packages combine top-notch medical care with luxurious stay options. 
            These comprehensive packages ensure patients receive the best treatments while enjoying a 
            relaxing vacation in Dubai. We collaborate with world-renowned healthcare providers to offer 
            state-of-the-art medical services in a variety of fields, including cosmetic surgery, dental 
            care, and wellness treatments.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">History</h2>
          <p>
            The concept of medical vacations has its roots in ancient times, where people traveled 
            to hot springs and therapeutic spas for healing purposes. In the modern era, this concept 
            has evolved significantly. Dubai, with its advanced healthcare infrastructure and luxurious 
            hospitality industry, has become a leading destination for medical tourism. Our company has 
            been at the forefront of this evolution, continually adapting and expanding our services to 
            meet the growing demand for high-quality medical care combined with the comforts of a vacation.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Our Services</h2>
          <p>
            We offer a wide range of medical services, including but not limited to:
            <ul>
              <li>Cosmetic Surgery</li>
              <li>Dental Care</li>
              <li>Orthopedic Surgery</li>
              <li>Cardiovascular Treatments</li>
              <li>Wellness and Rehabilitation</li>
            </ul>
          </p>
          <p>
            Our dedicated team of professionals ensures that every aspect of your medical vacation is 
            taken care of, from initial consultation and treatment to recovery and follow-up care.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Why Choose Us?</h2>
          <p>
            Choosing us for your medical vacation means opting for excellence in healthcare and hospitality. 
            Our partnerships with leading healthcare providers ensure that you receive world-class treatment. 
            Additionally, our luxurious accommodations and personalized services make your stay as comfortable 
            and enjoyable as possible. We prioritize your health, safety, and satisfaction above all else.
          </p>
        </section>
      </div>
    </div>
  );
}

export default MedicalVacationPage;
