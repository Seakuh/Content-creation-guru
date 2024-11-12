// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import contentGuruLogo from '../assets/conten-guru-logo.svg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-container ${isScrolled ? 'blur' : ''}`}>
      <div className="header-logo" onClick={handleLogoClick}>
        <img src={contentGuruLogo} alt="Content Guru Logo" />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className={menuOpen ? 'line open' : 'line'}></span>
        <span className={menuOpen ? 'line open' : 'line'}></span>
        <span className={menuOpen ? 'line open' : 'line'}></span>
      </div>
      {menuOpen && <div className="menu-dropdown">Menü-Inhalt hier...</div>}
    </header>
  );
};

export default Header;
