import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import brainLogoDark from '../assets/brain.png'; // used when light mode
import brainLogoLight from '../assets/brain.png'; // used when dark mode

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onServiceAgreementClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onServiceAgreementClick }) => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-900 dark:text-gray-100 gap-x-3">
          <img 
            src={darkMode ? brainLogoLight : brainLogoDark} 
            alt="logo" 
            className="w-8 h-8" 
          />
          AI Text Obfuscator
        </Link>
        <div className="flex items-center space-x-4">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#obfuscate" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium">
            Tool
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" /> : <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
          </button>
          <button
            onClick={onServiceAgreementClick}
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Service Agreement
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
