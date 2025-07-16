import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <div className="sticky-header">
        <TopBar />
        <Header />
        
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;