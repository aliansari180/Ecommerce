import React from 'react';
import './Body.css'; // Import the CSS file for styling

const Body = () => {
  return (
    <div className="body-container">
      <div className="text-container">
        <h1>Eco International</h1>
      </div>
      <div className="card">
        <h2>Eco International</h2>
        <p>About our eco-friendly initiatives and projects.</p>
      </div>
      <div className="image-container">
        <img src="House.jpg" alt="Large Image" />
      </div>
      <div className="about-card">
        <h3>About Us</h3>
        <p>We are dedicated to making a positive impact on the environment through our sustainable practices.</p>
      </div>
      <img src="icon.jpg" alt="" className='icon' />
    </div>
  );
};

export default Body;
