import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
      <div className="navbar-brand">
  
      <button
        className={`navbar-burger burger ${isOpen ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
  
  </div>
        <motion.div
          className={`navbar-menu ${isOpen ? 'is-active' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="navbar-end">
            <a href="/" className="navbar-item">
              Pagina
            </a>
            <a href="/" className="navbar-item">
                Pagina
            </a>
            <a href="/" className="navbar-item">
                Pagina
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
