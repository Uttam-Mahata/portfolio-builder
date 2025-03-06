import React, { useState } from 'react';
import ColorSchemeSelector from './ColorSchemeSelector';
import FontSelector from './FontSelector';
import LayoutCustomizer from './LayoutCustomizer';
import SectionLayoutCustomizer from './SectionLayoutCustomizer';
import TemplatePicker from './TemplatePicker';
import CustomizationPreview from './CustomizationPreview';
import { Palette, Type, Layout, Grid, LayoutTemplate } from 'lucide-react';

const CustomizationPanel = () => {
  const [activeTab, setActiveTab] = useState('template');

  const tabs = [
    { id: 'template', label: 'Template', icon: <LayoutTemplate size={16} /> },
    { id: 'colors', label: 'Colors', icon: <Palette size={16} /> },
    { id: 'fonts', label: 'Fonts', icon: <Type size={16} /> },
    { id: 'layout', label: 'Layout', icon: <Layout size={16} /> },
    { id: 'sections', label: 'Sections', icon: <Grid size={16} /> }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="border-b">
        <nav className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-1 overflow-y-auto max-h-[calc(100vh-13rem)]">
        {activeTab === 'template' && <TemplatePicker />}
        {activeTab === 'colors' && <ColorSchemeSelector />}
        {activeTab === 'fonts' && <FontSelector />}
        {activeTab === 'layout' && <LayoutCustomizer />}
        {activeTab === 'sections' && <SectionLayoutCustomizer />}
      </div>
      
      {/* Preview remains visible at the bottom regardless of the active tab */}
      <div className="p-4 border-t mt-4">
        <CustomizationPreview />
      </div>
    </div>
  );
};

export default CustomizationPanel;