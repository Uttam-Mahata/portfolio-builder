import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const FontSelector = () => {
  const { customization, updateFonts } = usePortfolio();
  const { fonts } = customization;
  
  const fontOptions = [
    { value: 'Inter, sans-serif', label: 'Inter (Default)' },
    { value: 'Roboto, sans-serif', label: 'Roboto' },
    { value: 'Open Sans, sans-serif', label: 'Open Sans' },
    { value: 'Montserrat, sans-serif', label: 'Montserrat' },
    { value: 'Poppins, sans-serif', label: 'Poppins' },
    { value: 'Lato, sans-serif', label: 'Lato' },
    { value: 'Raleway, sans-serif', label: 'Raleway' },
    { value: 'Playfair Display, serif', label: 'Playfair Display' },
    { value: 'Merriweather, serif', label: 'Merriweather' },
    { value: 'Source Code Pro, monospace', label: 'Source Code Pro' }
  ];

  const handleFontChange = (fontType, value) => {
    updateFonts({ [fontType]: value });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Typography</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Heading Font
          </label>
          <select
            value={fonts.heading}
            onChange={(e) => handleFontChange('heading', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {fontOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <div className="mt-3 p-3 border rounded">
            <h4 className="text-xl mb-1" style={{ fontFamily: fonts.heading }}>Heading Preview</h4>
            <h5 className="text-lg" style={{ fontFamily: fonts.heading }}>This is how your headings will look</h5>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Body Font
          </label>
          <select
            value={fonts.body}
            onChange={(e) => handleFontChange('body', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {fontOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <div className="mt-3 p-3 border rounded">
            <p className="mb-2" style={{ fontFamily: fonts.body }}>
              This is how your body text will appear on your portfolio. Good typography enhances 
              readability and provides a better user experience for your visitors.
            </p>
            <p style={{ fontFamily: fonts.body }}>
              Font selection is an important aspect of your portfolio's design. Choose fonts that 
              reflect your personal style while ensuring readability.
            </p>
          </div>
        </div>
      </div>
      
      {/* Recommended font pairings */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Recommended Font Pairings</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            className="p-3 border rounded hover:bg-gray-50 text-left"
            onClick={() => {
              updateFonts({
                heading: 'Montserrat, sans-serif',
                body: 'Open Sans, sans-serif'
              });
            }}
          >
            <span className="block text-sm font-medium mb-1">Montserrat + Open Sans</span>
            <span className="block text-xs text-gray-500">Modern & Clean</span>
          </button>
          
          <button
            className="p-3 border rounded hover:bg-gray-50 text-left"
            onClick={() => {
              updateFonts({
                heading: 'Playfair Display, serif',
                body: 'Source Sans Pro, sans-serif'
              });
            }}
          >
            <span className="block text-sm font-medium mb-1">Playfair Display + Source Sans Pro</span>
            <span className="block text-xs text-gray-500">Classic & Elegant</span>
          </button>
          
          <button
            className="p-3 border rounded hover:bg-gray-50 text-left"
            onClick={() => {
              updateFonts({
                heading: 'Poppins, sans-serif',
                body: 'Lato, sans-serif'
              });
            }}
          >
            <span className="block text-sm font-medium mb-1">Poppins + Lato</span>
            <span className="block text-xs text-gray-500">Professional & Readable</span>
          </button>
          
          <button
            className="p-3 border rounded hover:bg-gray-50 text-left"
            onClick={() => {
              updateFonts({
                heading: 'Raleway, sans-serif',
                body: 'Roboto, sans-serif'
              });
            }}
          >
            <span className="block text-sm font-medium mb-1">Raleway + Roboto</span>
            <span className="block text-xs text-gray-500">Versatile & Clean</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Note: Make sure these fonts are either web-safe or available via your CSS (e.g. Google Fonts).</p>
      </div>
    </div>
  );
};

export default FontSelector;