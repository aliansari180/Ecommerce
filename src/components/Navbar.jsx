import React from 'react';
import './Navbar.css'; // Don't forget to create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="navlogo.png" alt="" />
      </div>
      <div className="nav-links">
      <ul >
        <li><a href="#">Home</a></li>
        <li><a href="#">Elements</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
      </div> 
      <div className="login-cart">
        <ul>

      <li><a href="#">Login</a></li>
        <li><a href="#">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
