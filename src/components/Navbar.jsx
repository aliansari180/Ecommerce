import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <ul className="nav-links">
        <li><a href="#">CURRENT LOGIN</a></li>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
      </ul>
      <div className="logo">
        <img src="navlogo.png" alt="logo" />
      </div>
      <ul className="nav-links1">
        <li><a href="#">WHAT WE BUY</a></li>
        <li><a href="#">REFERRAL PROGRAM</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
