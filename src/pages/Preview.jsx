import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Header from '../components/portfolio-sections/Header';
import Hero from '../components/portfolio-sections/Hero';
import About from '../components/portfolio-sections/About';
import Skills from '../components/portfolio-sections/Skills';
import Experience from '../components/portfolio-sections/Experience';
import Projects from '../components/portfolio-sections/Projects';
import Achievements from '../components/portfolio-sections/Achievements';
import Certificates from '../components/portfolio-sections/Certificates';
import Organizations from '../components/portfolio-sections/Organizations';
import { usePortfolio } from '../context/PortfolioContext';

const Preview = () => {
  const navigate = useNavigate();
  const { portfolio, customization } = usePortfolio();
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [publicUrl, setPublicUrl] = useState('');
  const [publishing, setPublishing] = useState(false);
  const { layout } = customization;

  const handleEdit = () => {
    navigate('/editor');
  };

  const handlePublish = () => {
    setPublishing(true);
    
    // Simulate publishing process
    setTimeout(() => {
      const randomId = Math.random().toString(36).substring(2, 8);
      setPublicUrl(`https://portfoliobuild.com/p/${randomId}`);
      setPublishing(false);
      setShowPublishModal(true);
    }, 2000);
  };

  const handleCloseModal = () => {
    setShowPublishModal(false);
  };

  // Get sections based on customized order
  const renderSections = () => {
    const sectionComponents = {
      header: <Header key="header" />,
      hero: <Hero key="hero" />,
      about: <About key="about" className="section" />,
      skills: <Skills key="skills" className="section" />,
      experience: <Experience key="experience" className="section" />,
      projects: <Projects key="projects" className="section" />,
      achievements: <Achievements key="achievements" className="section" />,
      certificates: <Certificates key="certificates" className="section" />,
      organizations: <Organizations key="organizations" className="section" />
    };

    return layout.sectionOrder.map(sectionId => sectionComponents[sectionId]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">PortfolioBuild</h1>
          
          <div className="flex space-x-4">
            <Button 
              onClick={handleEdit}
              variant="outline" 
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              Edit
            </Button>
            
            <Button 
              onClick={handlePublish}
              variant="primary" 
              disabled={publishing}
            >
              {publishing ? 'Publishing...' : 'Publish'}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="preview-container">
          {renderSections()}
        </div>
      </div>
      
      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Portfolio Published!</h2>
                <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              
              <p className="mb-4">
                Your portfolio is now live and accessible at the URL below:
              </p>
              
              <div className="bg-gray-100 p-3 rounded-md mb-6 flex items-center">
                <input
                  type="text"
                  value={publicUrl}
                  readOnly
                  className="bg-transparent border-none flex-grow focus:outline-none"
                />
                <button 
                  onClick={() => navigator.clipboard.writeText(publicUrl)}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Copy
                </button>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleCloseModal}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Close
                </Button>
                
                <a 
                  href={publicUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">
                    View Portfolio
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Preview;