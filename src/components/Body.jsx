import React from 'react';
import './Body.css'; // Import the CSS file for styling

const Body = () => {
  return (
    <div className="body-container">
      <div className="content">
        <h3>NEW ARRIVALS</h3>
        <h2>Discover the World of Leather</h2>
        <p>Experience the finest craftsmanship and timeless elegance.</p>
        <p className="description">
          Explore the freedom of adventure with the Walker Leather Backpack in Vintage Oak.
        </p>
        <div className="buttons">
          <button className="shop-button">Shop Now</button>
          <button className="explore-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
