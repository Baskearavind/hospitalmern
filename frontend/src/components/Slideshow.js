import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`slide ${i === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
