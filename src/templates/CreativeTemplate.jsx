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

const CreativeTemplate = ({ isEditing = false }) => {
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
    <div className="creative-template">
      {/* Custom styling specific to Creative template */}
      <style jsx>{`
        .creative-template section {
          position: relative;
          padding: 5rem 0;
        }
        
        .creative-template section:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(120deg, rgba(var(--color-primary-rgb), 0.05), rgba(var(--color-accent-rgb), 0.05));
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          z-index: -1;
        }
        
        .creative-template h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }
        
        .creative-template h2:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          height: 4px;
          width: 60px;
          background-color: var(--color-accent);
        }
      `}</style>
      
      {renderSections()}
    </div>
  );
};

export default CreativeTemplate;