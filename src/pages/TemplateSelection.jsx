import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { usePortfolio } from '../context/PortfolioContext';

const TemplateSelection = () => {
  const navigate = useNavigate();
  const { selectTemplate } = usePortfolio();
  
  const templates = [
    {
      id: 'blank',
      name: 'Blank Canvas',
      description: 'Start from scratch and build your own custom design.',
      image: 'https://via.placeholder.com/400x250?text=Blank+Template',
      color: 'gray'
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean and professional design with a focus on readability.',
      image: 'https://via.placeholder.com/400x250?text=Modern+Template',
      color: 'blue'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Bold and colorful design to showcase your creative work.',
      image: 'https://via.placeholder.com/400x250?text=Creative+Template',
      color: 'purple'
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      description: 'Simple and elegant design that focuses on your content.',
      image: 'https://via.placeholder.com/400x250?text=Minimalist+Template',
      color: 'green'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Formal design ideal for corporate or business profiles.',
      image: 'https://via.placeholder.com/400x250?text=Professional+Template',
      color: 'red'
    },
    {
      id: 'developer',
      name: 'Developer',
      description: 'Technical design with sections optimized for showing code and tech skills.',
      image: 'https://via.placeholder.com/400x250?text=Developer+Template',
      color: 'yellow'
    }
  ];

  const handleSelectTemplate = (templateId) => {
    selectTemplate(templateId);
    navigate('/editor');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Choose a Template</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a template to get started. You can always customize and change sections later.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-100 relative">
                  <img 
                    src={template.image} 
                    alt={template.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 p-2 bg-indigo-600 text-white text-xs font-medium">
                    {template.name}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-6">{template.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      onClick={() => handleSelectTemplate(template.id)}
                      variant={template.id === 'blank' ? 'outline' : 'primary'}
                    >
                      Select Template
                    </Button>
                    
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TemplateSelection;