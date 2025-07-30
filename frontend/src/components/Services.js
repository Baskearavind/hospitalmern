// src/components/services.js
import React from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    title: "General Consultation",
    description: "Routine health check-ups and general medical advice.",
    image: "/images/11.webp",
  },
  {
    id: 2,
    title: "Emergency Services",
    description: "24/7 emergency medical assistance and care.",
    image: "/images/emergency.jpg",
  },
  {
    id: 3,
    title: "Laboratory Tests",
    description: "Accurate and quick lab testing services.",
    image: "/images/lab.jpg",
  },
  {
    id: 4,
    title: "Surgery Unit",
    description: "Advanced surgical facilities with expert surgeons.",
    image: "/images/surgery.jpg",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">We offer quality healthcare for every need.</p>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-box" key={service.id}>
            <img src={service.image} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
