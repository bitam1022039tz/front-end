import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <FontAwesomeIcon icon={faBell} className="header-icon" />
      </div>
      <div className="header-right">
        <h2>TOURISM MANAGEMENT SYSTEM</h2>
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faUser} className="header-icon" />
      </div>
    </div>
  );
};

export default Header;
