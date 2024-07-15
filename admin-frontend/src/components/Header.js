// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from './final.png'; // Corrected path to the logo

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="super-admin">
        <div className="dropdown">
          <button className="dropbtn">Super Admin</button>
          <div className="dropdown-content">
            <a href="#">Change Password</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;