// src/components/Loading.tsx
import React from 'react';
import contentGuruLogo from '../../assets/conten-guru-logo.svg';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <img src={contentGuruLogo} alt="Loading" className="loading-logo" />
      <div className="loading-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Loading;
