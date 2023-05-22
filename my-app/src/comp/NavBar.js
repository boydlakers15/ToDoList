import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';


const Navbar = () => {

  return (
    <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
      </div>
      <div className="navbar-links">
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
