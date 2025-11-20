import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import AIBanner from './components/AIBanner';
import Courses from './components/Courses';
import TrustedCompanies from './components/TrustedCompanies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <AIBanner />
      <Courses />
      <TrustedCompanies />
    </div>
  );
}

export default App;