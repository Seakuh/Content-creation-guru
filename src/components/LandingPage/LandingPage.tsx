// src/components/LandingPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import contentGuruLogo from '../../assets/conten-guru-logo.svg';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/platform'); // Navigiert zur PlatformForm-Seite
  };

  return (
    <div className="landing-page">
      <img src={contentGuruLogo} alt="Content Guru Logo" className="landing-logo" />
      <h1 className="landing-title">Willkommen bei Content Guru</h1>
      <p className="landing-description">
        Ihre Lösung für maßgeschneiderte Inhalte. Erstellen Sie ansprechende Social-Media-Beiträge für jede Plattform.
      </p>
      <button className="landing-button" onClick={handleButtonClick}>
        Zur Anwendung
      </button>
    </div>
  );
};

export default LandingPage;
