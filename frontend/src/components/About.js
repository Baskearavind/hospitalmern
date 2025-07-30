// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-hero">
      <div className="about-container">
        <h1>About Our Hospital</h1>
        <p>
          We are committed to providing high-quality, compassionate healthcare. Our hospital uses cutting-edge technology and highly skilled professionals to ensure the best outcomes for patients.
        </p>
        <img src="/images/i1.jpg" alt="Hospital" className="about-image" />
      </div>
    </section>
  );
};

export default About;
