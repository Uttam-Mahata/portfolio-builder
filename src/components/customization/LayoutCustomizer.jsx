import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const LayoutCustomizer = () => {
  const { customization, updateLayout, reorderSections } = usePortfolio();
  const { layout } = customization;
  
  const handleLayoutChange = (key, value) => {
    updateLayout({ [key]: value });
  };

  const onDragEnd = (result) => {
    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = Array.from(layout.sectionOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    reorderSections(items);
  };

  // Format section name for display
  const formatSectionName = (section) => {
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Layout Customization</h3>
      
      <div className="space-y-6">
        {/* Content Width */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Width
          </label>
          <select
            value={layout.contentWidth}
            onChange={(e) => handleLayoutChange('contentWidth', e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="max-w-4xl">Narrow (1024px)</option>
            <option value="max-w-5xl">Medium (1280px)</option>
            <option value="max-w-6xl">Wide (1536px)</option>
            <option value="max-w-7xl">Extra Wide (1920px)</option>
            <option value="max-w-full">Full Width</option>
          </select>
        </div>
        
        {/* Spacing */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Section Spacing
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => handleLayoutChange('spacing', 'compact')}
              className={`p-3 border rounded text-center ${
                layout.spacing === 'compact' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
              }`}
            >
              <span className="block text-sm font-medium">Compact</span>
              <span className="block text-xs text-gray-500 mt-1">Less space between sections</span>
            </button>
            <button
              type="button"
              onClick={() => handleLayoutChange('spacing', 'standard')}
              className={`p-3 border rounded text-center ${
                layout.spacing === 'standard' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
              }`}
            >
              <span className="block text-sm font-medium">Standard</span>
              <span className="block text-xs text-gray-500 mt-1">Balanced spacing</span>
            </button>
            <button
              type="button"
              onClick={() => handleLayoutChange('spacing', 'spacious')}
              className={`p-3 border rounded text-center ${
                layout.spacing === 'spacious' ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
              }`}
            >
              <span className="block text-sm font-medium">Spacious</span>
              <span className="block text-xs text-gray-500 mt-1">More breathing room</span>
            </button>
          </div>
        </div>
        
        {/* Section Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Section Order (Drag to reorder)
          </label>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="sectionOrder">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="border rounded divide-y"
                >
                  {layout.sectionOrder.map((section, index) => (
                    <Draggable key={section} draggableId={section} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-3 bg-white flex items-center"
                        >
                          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                          </svg>
                          <span className="text-sm">{formatSectionName(section)}</span>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default LayoutCustomizer;