// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Notice 'Routes' instead of 'Switch'
import LoginPage from './components/LoginPage';
import PortfolioGallery from './components/PortfolioGallery';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<LoginPage />} /> {/* Use 'element' prop */}
          <Route path="/portfolio" element={<PortfolioGallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
