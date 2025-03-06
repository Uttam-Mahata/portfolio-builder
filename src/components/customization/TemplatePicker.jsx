import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Check } from 'lucide-react';

const TemplatePicker = () => {
  const { portfolio, selectTemplate } = usePortfolio();
  
  const templates = [
    { 
      id: 'blank',
      name: 'Blank Canvas',
      description: 'Start from scratch and build your own custom design.',
      image: 'https://via.placeholder.com/300x200?text=Blank+Template',
      features: ['Completely customizable', 'No pre-defined sections', 'Build from scratch']
    },
    { 
      id: 'modern',
      name: 'Modern',
      description: 'Clean and professional design with a focus on readability.',
      image: 'https://via.placeholder.com/300x200?text=Modern+Template',
      features: ['Clean typography', 'Balanced spacing', 'Professional layout']
    },
    { 
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Simple and elegant design that focuses on your content.',
      image: 'https://via.placeholder.com/300x200?text=Minimalist+Template',
      features: ['Simple design', 'Elegant typography', 'Focus on content']
    },
    { 
      id: 'creative',
      name: 'Creative',
      description: 'Bold and colorful design to showcase your creative work.',
      image: 'https://via.placeholder.com/300x200?text=Creative+Template',
      features: ['Bold colors', 'Unique layouts', 'Creative elements']
    },
    { 
      id: 'professional',
      name: 'Professional',
      description: 'Formal design ideal for corporate or business profiles.',
      image: 'https://via.placeholder.com/300x200?text=Professional+Template',
      features: ['Corporate styling', 'Structured layout', 'Business-focused']
    },
    { 
      id: 'developer',
      name: 'Developer',
      description: 'Technical design with sections optimized for showing code and tech skills.',
      image: 'https://via.placeholder.com/300x200?text=Developer+Template',
      features: ['Code snippets', 'Technical focus', 'Developer-friendly sections']
    }
  ];

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Choose a Template</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map(template => (
          <div 
            key={template.id}
            className={`border rounded-lg overflow-hidden shadow-sm transition-all ${
              portfolio.templateId === template.id ? 'ring-2 ring-indigo-500' : 'hover:shadow-md'
            }`}
          >
            <div className="relative">
              <img 
                src={template.image} 
                alt={template.name}
                className="w-full h-40 object-cover"
              />
              {portfolio.templateId === template.id && (
                <div className="absolute top-2 right-2 bg-indigo-500 text-white p-1 rounded-full">
                  <Check size={16} />
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h4 className="font-medium mb-1">{template.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              
              <div className="mb-3">
                <ul className="text-xs text-gray-500 space-y-1">
                  {template.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-1">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => selectTemplate(template.id)}
                className={`w-full py-2 rounded text-sm font-medium ${
                  portfolio.templateId === template.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {portfolio.templateId === template.id ? 'Selected' : 'Select Template'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatePicker;