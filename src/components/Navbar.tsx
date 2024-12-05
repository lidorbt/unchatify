import React from 'react';
import { Link } from 'react-router-dom';
import brainLogo from '../assets/brain.png'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-800 gap-x-4">
          <img src={brainLogo} alt='logo' className='w-8 h-8' />
          AI Text Obfuscator
        </Link>
        <div>
          <Link to="/" className="text-gray-600 hover:text-purple-600 mx-4">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-purple-600 mx-4">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
