import React from 'react';
import './Navbar.css'; // Make sure to create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="navlogo.png" alt="" />
        <h1>
            CAR ART 
            </h1>
      </div>
      <ul className="nav-links">
        <li><a href="#">TRACKS</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
