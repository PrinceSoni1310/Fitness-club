import React from 'react';
import BannerImage from '../assets/images/banner-new.png'; // Correct image import
import '../pages/Home.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="hero-banner-content">
        <h1>Welcome to FITNESS CLUB</h1>
        <p>Get stronger, fitter, and healthier with us!</p>
      </div>
    </div>
  );
};

export default HeroBanner;
