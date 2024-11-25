import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink for active link styling
import '../styles/Navbar.css';

export default function Navbar({ links = [] }) { // Default value for links
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.map(({ to, name }) => (
          <li key={to} className="nav-item">
            <NavLink
              className="nav-link"
              to={to}
              activeClassName="active" // Add active styling class
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
