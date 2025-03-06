import React, { useState } from 'react';
import ColorSchemeSelector from './ColorSchemeSelector';
import FontSelector from './FontSelector';
import LayoutCustomizer from './LayoutCustomizer';
import CustomizationPreview from './CustomizationPreview';

const CustomizationPanel = () => {
  const [activeTab, setActiveTab] = useState('colors');

  const tabs = [
    { id: 'colors', label: 'Colors' },
    { id: 'fonts', label: 'Fonts' },
    { id: 'layout', label: 'Layout' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="border-b">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-1">
        {activeTab === 'colors' && <ColorSchemeSelector />}
        {activeTab === 'fonts' && <FontSelector />}
        {activeTab === 'layout' && <LayoutCustomizer />}
      </div>
      
      {/* Add the preview component below the active tab content */}
      <div className="p-4 border-t mt-4">
        <CustomizationPreview />
      </div>
    </div>
  );
};

export default CustomizationPanel;