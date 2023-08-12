import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="contact-info">
        <p>123-456-7890</p>
        <p>Contact us</p>
      </div>
      <div className="divider">
      <ul className="nav-links">
        <li><a href="#">LEATHER <br /> JACKETS</a></li>
        <li><a href="#">LEATHER  <br />GOODS</a></li>
        <li><a href="#">APPAREL</a></li>
        <li><a href="#">DISCOVER</a></li>
      </ul>
        </div> 
      <div className="logo">
        <img src="navlogo.png" alt="logo" />
      </div>
      <div className="user-actions">
        <div className="login">Login
        <img src="login.png" className='log' />
        </div>
        <div className="cart">Cart
        <img src="cart.png" className='log' />
        
        </div>
        <div className="search">
          {/* Search bar or icon */}
        </div>
      </div>
      <div className="divider1">
      <div className="search-bar">
      <input type="search" name="" className='search' id="" placeholder='Search' />
      </div>
        </div> {/* Line between user actions and search bar */}
    </nav>
  );
};

export default Navbar;
