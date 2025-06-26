// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Dòng này để import toàn bộ CSS của bạn
import App from './App'; // Dòng này import component giao diện chính

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);