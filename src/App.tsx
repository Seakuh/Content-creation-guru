// src/components/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import MainContent from './MainContent';
import Login from './Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './Footer/Footer';
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/platform" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
