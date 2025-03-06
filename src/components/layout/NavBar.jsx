import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            PortfolioBuild
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/templates" className="text-gray-700 hover:text-indigo-600">
              Templates
            </Link>
            <Link to="/editor" className="text-gray-700 hover:text-indigo-600">
              Editor
            </Link>
            <Link to="/preview" className="text-gray-700 hover:text-indigo-600">
              Preview
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/templates" 
                className="text-gray-700 hover:text-indigo-600 py-2" 
                onClick={() => setIsOpen(false)}
              >
                Templates
              </Link>
              <Link 
                to="/editor" 
                className="text-gray-700 hover:text-indigo-600 py-2" 
                onClick={() => setIsOpen(false)}
              >
                Editor
              </Link>
              <Link 
                to="/preview" 
                className="text-gray-700 hover:text-indigo-600 py-2" 
                onClick={() => setIsOpen(false)}
              >
                Preview
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;