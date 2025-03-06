import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Layout, AlignLeft, AlignCenter, AlignRight, Columns, Grid, List, ImageIcon } from 'lucide-react';

const SectionLayoutCustomizer = () => {
  const { customization, updateSectionLayout } = usePortfolio();
  const { sectionLayouts } = customization.layout;
  
  const handleLayoutChange = (section, property, value) => {
    updateSectionLayout(section, { [property]: value });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Section Layouts</h3>
      
      {/* Hero Section Layout */}
      <div className="mb-8 border-b pb-6">
        <h4 className="font-medium text-gray-800 mb-3 flex items-center">
          <Layout size={18} className="mr-2" />
          Hero Section Layout
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Style</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'style', 'standard')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.hero.style === 'standard' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Standard</span>
                <span className="block text-xs text-gray-500 mt-1">Default layout</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'style', 'centered')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.hero.style === 'centered' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Centered</span>
                <span className="block text-xs text-gray-500 mt-1">Center aligned</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'style', 'split')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.hero.style === 'split' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Split</span>
                <span className="block text-xs text-gray-500 mt-1">Two columns</span>
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Image Position</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'imagePosition', 'left')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.hero.imagePosition === 'left' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-center items-center">
                  <ImageIcon size={16} className="mr-2" />
                  <span>Text</span>
                </div>
                <span className="block text-xs text-gray-500 mt-1">Image on left</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'imagePosition', 'right')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.hero.imagePosition === 'right' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-center items-center">
                  <span>Text</span>
                  <ImageIcon size={16} className="ml-2" />
                </div>
                <span className="block text-xs text-gray-500 mt-1">Image on right</span>
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Text Alignment</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'alignment', 'left')}
                className={`p-3 border rounded flex flex-col items-center ${
                  sectionLayouts.hero.alignment === 'left' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <AlignLeft size={16} />
                <span className="block text-xs text-gray-500 mt-1">Left</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'alignment', 'center')}
                className={`p-3 border rounded flex flex-col items-center ${
                  sectionLayouts.hero.alignment === 'center' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <AlignCenter size={16} />
                <span className="block text-xs text-gray-500 mt-1">Center</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('hero', 'alignment', 'right')}
                className={`p-3 border rounded flex flex-col items-center ${
                  sectionLayouts.hero.alignment === 'right' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <AlignRight size={16} />
                <span className="block text-xs text-gray-500 mt-1">Right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section Layout */}
      <div className="mb-8 border-b pb-6">
        <h4 className="font-medium text-gray-800 mb-3 flex items-center">
          <Layout size={18} className="mr-2" />
          About Section Layout
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Style</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('about', 'style', 'standard')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.about.style === 'standard' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Standard</span>
                <span className="block text-xs text-gray-500 mt-1">Side by side</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('about', 'style', 'centered')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.about.style === 'centered' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Centered</span>
                <span className="block text-xs text-gray-500 mt-1">Image above text</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('about', 'style', 'split')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.about.style === 'split' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Split</span>
                <span className="block text-xs text-gray-500 mt-1">Full width split</span>
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Image Position</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('about', 'imagePosition', 'left')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.about.imagePosition === 'left' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-center items-center">
                  <ImageIcon size={16} className="mr-2" />
                  <span>Text</span>
                </div>
                <span className="block text-xs text-gray-500 mt-1">Image on left</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('about', 'imagePosition', 'right')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.about.imagePosition === 'right' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-center items-center">
                  <span>Text</span>
                  <ImageIcon size={16} className="ml-2" />
                </div>
                <span className="block text-xs text-gray-500 mt-1">Image on right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section Layout */}
      <div className="mb-8 border-b pb-6">
        <h4 className="font-medium text-gray-800 mb-3 flex items-center">
          <Layout size={18} className="mr-2" />
          Skills Section Layout
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Display Style</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'style', 'bars')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.style === 'bars' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Progress Bars</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'style', 'tags')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.style === 'tags' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Tags</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'style', 'cards')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.style === 'cards' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Cards</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'style', 'list')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.style === 'list' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">List</span>
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Columns</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'columns', 2)}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.columns === 2 ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">2 Columns</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'columns', 3)}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.columns === 3 ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">3 Columns</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('skills', 'columns', 4)}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.skills.columns === 4 ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">4 Columns</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Section Layout */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-3 flex items-center">
          <Layout size={18} className="mr-2" />
          Projects Section Layout
        </h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Display Style</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('projects', 'style', 'cards')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.projects.style === 'cards' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Cards</span>
                <span className="block text-xs text-gray-500 mt-1">Standard grid</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('projects', 'style', 'list')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.projects.style === 'list' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">List</span>
                <span className="block text-xs text-gray-500 mt-1">Horizontal layout</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('projects', 'style', 'masonry')}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.projects.style === 'masonry' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">Masonry</span>
                <span className="block text-xs text-gray-500 mt-1">Pinterest style</span>
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-600 mb-2">Columns</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleLayoutChange('projects', 'columns', 2)}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.projects.columns === 2 ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">2 Columns</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('projects', 'columns', 3)}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.projects.columns === 3 ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">3 Columns</span>
              </button>
              <button
                type="button"
                onClick={() => handleLayoutChange('projects', 'columns', 4)}
                className={`p-3 border rounded text-center ${
                  sectionLayouts.projects.columns === 4 ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
                }`}
              >
                <span className="block text-sm font-medium">4 Columns</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLayoutCustomizer;