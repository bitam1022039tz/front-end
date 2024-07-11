import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faLayerGroup, faTable, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidenav.css'; // Ensure you have the appropriate CSS file

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-header">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidenav-menu">
        <li className="sidenav-item">
          <Link to="#" className="sidenav-link">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span>Dashboard</span>
          </Link>
        </li>
        
        <li className="sidenav-item">
          <Link to="#" className="sidenav-link">
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>Sidebar Layouts</span>
          </Link>
        </li>
       
        <li className="sidenav-item">
          <Link to="#" className="sidenav-link">
            <FontAwesomeIcon icon={faTable} />
            <span>Tables</span>
          </Link>
        </li>

        <li className="sidenav-item">
          <Link to="/signout" className="sidenav-link">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
