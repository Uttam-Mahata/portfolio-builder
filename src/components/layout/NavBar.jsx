import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          PortfolioBuild
        </Link>
        <div className="flex space-x-6">
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
    </nav>
  );
};

export default NavBar;