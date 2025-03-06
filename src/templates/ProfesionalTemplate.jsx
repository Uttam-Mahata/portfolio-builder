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

const ProfessionalTemplate = ({ isEditing = false }) => {
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
    <div className="professional-template">
      {/* Custom styling specific to Professional template */}
      <style jsx>{`
        .professional-template section {
          padding: 4rem 0;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .professional-template section:nth-child(even) {
          background-color: #f9fafb;
        }
        
        .professional-template h2 {
          font-size: 1.875rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 2rem;
        }
        
        .professional-template .section-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .professional-template .timeline-item {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid #e5e7eb;
        }
        
        .professional-template .timeline-item:before {
          content: "";
          position: absolute;
          left: -0.5rem;
          top: 0;
          height: 1rem;
          width: 1rem;
          border-radius: 50%;
          background-color: var(--color-primary);
        }
      `}</style>
      
      {renderSections()}
    </div>
  );
};

export default ProfessionalTemplate;