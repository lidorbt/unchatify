import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ObfuscatorPage from './pages/ObfuscatorPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="h-9">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<ObfuscatorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
