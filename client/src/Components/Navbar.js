import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file here

export default function Navbar() {
  return (
    <div className="nav-container"> {/* Apply the CSS class */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}