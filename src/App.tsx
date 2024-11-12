// src/components/App.tsx
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MainContent from './MainContent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer/>
    </div>
  );
};

export default App;
