import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

const ColorSchemeSelector = () => {
  const { customization, updateColors } = usePortfolio();
  const { colors } = customization;
  
  const presetColorSchemes = [
    {
      name: 'Default',
      colors: {
        primary: '#4F46E5',  // Indigo 600
        secondary: '#F9FAFB', // Gray 50
        text: '#1F2937',      // Gray 800
        accent: '#7C3AED',    // Violet 600
        background: '#FFFFFF' // White
      }
    },
    {
      name: 'Dark Mode',
      colors: {
        primary: '#6366F1',   // Indigo 500
        secondary: '#1F2937', // Gray 800
        text: '#F9FAFB',      // Gray 50
        accent: '#8B5CF6',    // Violet 500
        background: '#111827' // Gray 900
      }
    },
    {
      name: 'Emerald',
      colors: {
        primary: '#10B981',   // Emerald 500
        secondary: '#ECFDF5', // Emerald 50
        text: '#1F2937',      // Gray 800
        accent: '#3B82F6',    // Blue 500
        background: '#FFFFFF' // White
      }
    },
    {
      name: 'Rose',
      colors: {
        primary: '#F43F5E',   // Rose 500
        secondary: '#FFF1F2', // Rose 50
        text: '#1F2937',      // Gray 800
        accent: '#8B5CF6',    // Violet 500
        background: '#FFFFFF' // White
      }
    },
    {
      name: 'Amber',
      colors: {
        primary: '#F59E0B',   // Amber 500
        secondary: '#FFFBEB', // Amber 50
        text: '#1F2937',      // Gray 800
        accent: '#3B82F6',    // Blue 500
        background: '#FFFFFF' // White
      }
    },
  ];

  const handleColorChange = (colorKey, value) => {
    updateColors({ [colorKey]: value });
  };

  const applyPresetScheme = (scheme) => {
    updateColors(scheme.colors);
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Color Scheme</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Preset Color Schemes</h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {presetColorSchemes.map((scheme, index) => (
            <button
              key={index}
              onClick={() => applyPresetScheme(scheme)}
              className="text-center p-2 border rounded hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-center space-x-1 mb-2">
                {Object.values(scheme.colors).map((color, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <span className="text-xs">{scheme.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-sm font-medium">Custom Colors</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Color
            </label>
            <div className="flex items-center">
              <input
                type="color"
                value={colors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                className="w-10 h-10 mr-2 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={colors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Secondary Color
            </label>
            <div className="flex items-center">
              <input
                type="color"
                value={colors.secondary}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                className="w-10 h-10 mr-2 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={colors.secondary}
                onChange={(e) => handleColorChange('secondary', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Text Color
            </label>
            <div className="flex items-center">
              <input
                type="color"
                value={colors.text}
                onChange={(e) => handleColorChange('text', e.target.value)}
                className="w-10 h-10 mr-2 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={colors.text}
                onChange={(e) => handleColorChange('text', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Accent Color
            </label>
            <div className="flex items-center">
              <input
                type="color"
                value={colors.accent}
                onChange={(e) => handleColorChange('accent', e.target.value)}
                className="w-10 h-10 mr-2 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={colors.accent}
                onChange={(e) => handleColorChange('accent', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Background Color
            </label>
            <div className="flex items-center">
              <input
                type="color"
                value={colors.background}
                onChange={(e) => handleColorChange('background', e.target.value)}
                className="w-10 h-10 mr-2 rounded border cursor-pointer"
              />
              <input
                type="text"
                value={colors.background}
                onChange={(e) => handleColorChange('background', e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: colors.secondary }}>
        <h5 className="font-semibold mb-2" style={{ color: colors.text }}>Preview</h5>
        <div className="flex space-x-3">
          <button
            className="px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: colors.primary }}
          >
            Primary Button
          </button>
          <button
            className="px-4 py-2 rounded-md"
            style={{ backgroundColor: colors.accent, color: 'white' }}
          >
            Accent Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorSchemeSelector;