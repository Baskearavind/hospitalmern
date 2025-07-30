import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <section className="service-hero">
      <div className="service-container">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of healthcare services to meet the needs of patients of all ages. Your health is our priority.
        </p>
        <img
          src="/images/services-hero.jpg"
          alt="Hospital Services"
          className="service-image"
        />
      </div>
    </section>
  );
};

export default Service;
