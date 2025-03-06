import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import Header from '../portfolio-sections/Header';
import Hero from '../portfolio-sections/Hero';
import About from '../portfolio-sections/About';
import Skills from '../portfolio-sections/Skills';
import Experience from '../portfolio-sections/Experience';
import Projects from '../portfolio-sections/Projects';
import Achievements from '../portfolio-sections/Achievements';
import Certificates from '../portfolio-sections/Certificates';
import Organizations from '../portfolio-sections/Organizations';

const SectionEditor = ({ activeSection }) => {
  const { portfolio } = usePortfolio();

  const renderSection = () => {
    switch (activeSection) {
      case 'header':
        return <Header isEditing={true} />;
      case 'hero':
        return <Hero isEditing={true} />;
      case 'about':
        return <About isEditing={true} />;
      case 'skills':
        return <Skills isEditing={true} />;
      case 'experience':
        return <Experience isEditing={true} />;
      case 'projects':
        return <Projects isEditing={true} />;
      case 'achievements':
        return <Achievements isEditing={true} />;
      case 'certificates':
        return <Certificates isEditing={true} />;
      case 'organizations':
        return <Organizations isEditing={true} />;
      default:
        return <div className="p-6 text-center text-gray-500">Select a section to edit</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h3 className="text-xl font-semibold text-gray-800 capitalize">
          {activeSection ? `Edit ${activeSection}` : 'Portfolio Editor'}
        </h3>
      </div>
      <div>
        {renderSection()}
      </div>
    </div>
  );
};

export default SectionEditor;