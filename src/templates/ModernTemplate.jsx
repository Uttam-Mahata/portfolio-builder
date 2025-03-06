import React from 'react';
import Header from '../components/portfolio-sections/Header';
import Hero from '../components/portfolio-sections/Hero';
import About from '../components/portfolio-sections/About';
import Skills from '../components/portfolio-sections/Skills';
import Experience from '../components/portfolio-sections/Experience';
import Projects from '../components/portfolio-sections/Projects';
import Achievements from '../components/portfolio-sections/Achievements';
import Certificates from '../components/portfolio-sections/Certificates';
import Organizations from '../components/portfolio-sections/Organizations';

const ModernTemplate = ({ portfolio, isEditing = false }) => {
  // In a real implementation, we'd apply specific styling or structure for this template
  return (
    <div className="modern-template">
      {/* Custom styling specific to Modern template */}
      <style jsx>{`
        .modern-template section {
          max-width: 1200px;
          margin: 0 auto;
        }
        .modern-template section:nth-child(even) {
          background-color: #f9fafb;
        }
      `}</style>

      <Header isEditing={isEditing} />
      <Hero isEditing={isEditing} />
      <About isEditing={isEditing} />
      <Skills isEditing={isEditing} />
      <Experience isEditing={isEditing} />
      <Projects isEditing={isEditing} />
      <Achievements isEditing={isEditing} />
      <Certificates isEditing={isEditing} />
      <Organizations isEditing={isEditing} />
    </div>
  );
};

export default ModernTemplate;