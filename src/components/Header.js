import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    setIsNavbarCollapsed(true); // Collapse menu after link click
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed); // Toggle menu open/close
  };

  return (
    <nav className="navbar navbar-expand-lg bg-custom-blue navbar-custom-text fixed-top shadow slide-header">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={handleNavLinkClick}>
        <img
          src="/MyLogo.png"
          alt="Binayak Sahoo Logo"
          style={{ height: '80px', width: '100px', marginRight: '10px' }}
        />
          Binayak Sahoo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={!isNavbarCollapsed}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={handleNavLinkClick}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={handleNavLinkClick}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience" onClick={handleNavLinkClick}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;