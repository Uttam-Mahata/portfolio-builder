import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import SectionEditor from '../components/editor/SectionEditor';
import CustomizationPanel from '../components/customization/CustomizationPanel';
import { usePortfolio } from '../context/PortfolioContext';

const Editor = () => {
  const navigate = useNavigate();
  const { portfolio, customization } = usePortfolio();
  const [activeTab, setActiveTab] = useState('content'); // 'content' or 'design'
  const [activeSection, setActiveSection] = useState('header');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const sections = [
    { id: 'header', name: 'Header' },
    { id: 'hero', name: 'Hero Section' },
    { id: 'about', name: 'About Me' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'certificates', name: 'Certificates' },
    { id: 'organizations', name: 'Organizations' }
  ];

  const handlePreview = () => {
    navigate('/preview');
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavBar />
      
      <div className="flex-grow flex flex-col">
        {/* Editor Tabs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex">
              <button
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'content'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('content')}
              >
                Edit Content
              </button>
              <button
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'design'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('design')}
              >
                Customize Design
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col md:flex-row">
          {/* Mobile sidebar toggle */}
          <div className="md:hidden p-4 bg-white border-b">
            <button
              onClick={toggleMobileSidebar}
              className="flex items-center text-gray-700 hover:text-indigo-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              {activeTab === 'content' 
                ? (activeSection ? `Editing: ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}` : 'Select Section') 
                : 'Customize Design'}
            </button>
          </div>
          
          {/* Sidebar */}
          <div className={`
            bg-white border-r w-full md:w-64 md:flex-shrink-0 md:block
            ${isMobileSidebarOpen ? 'block' : 'hidden'}
          `}>
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-800">
                {activeTab === 'content' ? 'Portfolio Sections' : 'Design Options'}
              </h3>
              <p className="text-sm text-gray-500">
                {activeTab === 'content' ? 'Click to edit each section' : 'Customize your portfolio design'}
              </p>
            </div>
            
            <div className="overflow-y-auto h-[calc(100vh-13rem)]">
              {activeTab === 'content' ? (
                <ul className="divide-y divide-gray-200">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => {
                          setActiveSection(section.id);
                          setIsMobileSidebarOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          activeSection === section.id ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {section.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-sm text-gray-600">
                  <p className="mb-4">
                    Customize the look and feel of your portfolio with the options below.
                  </p>
                  <ul className="space-y-2">
                    <li className="hover:text-indigo-600 cursor-pointer">• Color Schemes</li>
                    <li className="hover:text-indigo-600 cursor-pointer">• Typography</li>
                    <li className="hover:text-indigo-600 cursor-pointer">• Layout Options</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t mt-auto">
              <Button 
                onClick={handlePreview}
                variant="primary" 
                className="w-full"
              >
                Preview Portfolio
              </Button>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="flex-grow p-4 md:p-8">
            {activeTab === 'content' ? (
              <SectionEditor activeSection={activeSection} />
            ) : (
              <CustomizationPanel />
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Editor;