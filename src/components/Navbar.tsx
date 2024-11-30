import React from 'react';
import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
          <Wand2 className="mr-2 text-purple-600" /> AI Text Obfuscator
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
