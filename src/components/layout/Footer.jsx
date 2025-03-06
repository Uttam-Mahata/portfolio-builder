import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">PortfolioBuild</h3>
            <p className="text-gray-400">Build your professional portfolio in minutes</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PortfolioBuild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;