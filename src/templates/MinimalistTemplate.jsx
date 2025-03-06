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

const MinimalistTemplate = ({ isEditing = false }) => {
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
    <div className="minimalist-template">
      {/* Custom styling specific to Minimalist template */}
      <style jsx>{`
        .minimalist-template {
          --section-padding: 3rem 0;
        }
        
        .minimalist-template section {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--section-padding);
        }
        
        .minimalist-template h2 {
          font-size: 1.75rem;
          font-weight: 500;
        }
        
        .minimalist-template .section {
          border-bottom: 1px solid #eee;
        }
        
        .minimalist-template .section:last-child {
          border-bottom: none;
        }
      `}</style>
      
      {renderSections()}
    </div>
  );
};

export default MinimalistTemplate;