import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Header from '../components/portfolio-sections/Header';
import Hero from '../components/portfolio-sections/Hero';
import About from '../components/portfolio-sections/About';
import Skills from '../components/portfolio-sections/Skills';
import Experience from '../components/portfolio-sections/Experience';
import Projects from '../components/portfolio-sections/Projects';
import Achievements from '../components/portfolio-sections/Achievements';
import Certificates from '../components/portfolio-sections/Certificates';
import Organizations from '../components/portfolio-sections/Organizations';

const DeveloperTemplate = ({ isEditing = false }) => {
  const { customization } = usePortfolio();
  const { layout } = customization;

  // Get sections based on customized order
  const renderSections = () => {
    const sectionComponents = {
      header: <Header key="header" isEditing={isEditing} />,
      hero: <Hero key="hero" isEditing={isEditing} />,
      about: <About key="about" isEditing={isEditing} className="section" />,
      skills: <Skills key="skills" isEditing={isEditing} className="section" />,
      experience: <Experience key="experience" isEditing={isEditing} className="section" />,
      projects: <Projects key="projects" isEditing={isEditing} className="section" />,
      achievements: <Achievements key="achievements" isEditing={isEditing} className="section" />,
      certificates: <Certificates key="certificates" isEditing={isEditing} className="section" />,
      organizations: <Organizations key="organizations" isEditing={isEditing} className="section" />
    };

    return layout.sectionOrder.map(sectionId => sectionComponents[sectionId]);
  };

  return (
    <div className="developer-template">
      {/* Custom styling specific to Developer template */}
      <style jsx>{`
        .developer-template {
          --code-bg: #1e1e3f;
          --code-text: #9efeff;
        }
        
        .developer-template section {
          padding: 4rem 0;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .developer-template h2 {
          font-family: 'Source Code Pro', monospace;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--color-primary);
        }
        
        .developer-template h2:before {
          content: "< ";
          opacity: 0.6;
        }
        
        .developer-template h2:after {
          content: " />";
          opacity: 0.6;
        }
        
        .developer-template .code-block {
          background-color: var(--code-bg);
          padding: 1rem;
          border-radius: 0.5rem;
          font-family: 'Source Code Pro', monospace;
          color: var(--code-text);
        }
        
        .developer-template .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }
        
        .developer-template .skill-item {
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 1rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .developer-template .skill-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
      
      {renderSections()}
    </div>
  );
};

export default DeveloperTemplate;