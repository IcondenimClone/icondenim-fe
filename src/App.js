import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <AuthPage />
      <Footer />
    </>
  );
}

export default App;