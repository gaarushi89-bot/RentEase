import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, MessageSquare, LogIn, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center space-x-2">
        <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">R</span>
        </div>
        <span className="text-xl font-bold text-neutral-text">RentEase</span>
      </Link>
      <div className="hidden md:flex space-x-6 font-medium text-neutral-text">
        <Link to="/search" className="text-primary flex items-center gap-1 hover:opacity-80 transition"><Search size={18} /> Search</Link>
        <Link to="#" className="hover:text-primary flex items-center gap-1 transition"><FileText size={18} /> Applications</Link>
        <Link to="#" className="hover:text-primary flex items-center gap-1 transition"><MessageSquare size={18} /> Messages</Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-neutral-subtext hover:text-neutral-text hidden sm:flex items-center gap-1"><LogIn size={18} /> Log In</button>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">Get Started</button>
        <button className="md:hidden text-neutral-text"><Menu size={24} /></button>
      </div>
    </nav>
  );
};

export default Navbar;
