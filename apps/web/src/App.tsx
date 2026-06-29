import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        
        {/* Footer shown only on home page for cleaner search experience */}
        <Routes>
          <Route path="/" element={
            <footer className="bg-white border-t px-4 py-12">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="bg-primary w-6 h-6 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <span className="text-lg font-bold text-neutral-text">RentEase</span>
                </div>
                <div className="flex space-x-8 text-sm text-neutral-subtext">
                  <a href="#" className="hover:text-neutral-text">Terms</a>
                  <a href="#" className="hover:text-neutral-text">Privacy</a>
                  <a href="#" className="hover:text-neutral-text">Contact</a>
                  <a href="#" className="hover:text-neutral-text">Landlords</a>
                </div>
              </div>
            </footer>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
