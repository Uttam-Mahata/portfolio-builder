import React, { useState } from 'react';
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
import Button from '../components/ui/Button';

const BlankTemplate = ({ isEditing = false }) => {
  const { portfolio } = usePortfolio();
  const [enabledSections, setEnabledSections] = useState({
    header: true,
    hero: true,
    about: true,
    skills: true,
    experience: true,
    projects: true,
    achievements: false,
    certificates: false,
    organizations: false
  });

  const toggleSection = (section) => {
    if (!isEditing) return;
    setEnabledSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="blank-template">
      {isEditing && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
          <h3 className="font-semibold mb-2">Toggle Sections</h3>
          {Object.keys(enabledSections).map(section => (
            <div key={section} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`toggle-${section}`}
                checked={enabledSections[section]}
                onChange={() => toggleSection(section)}
                className="mr-2"
              />
              <label htmlFor={`toggle-${section}`} className="capitalize">
                {section}
              </label>
            </div>
          ))}
        </div>
      )}

      {enabledSections.header && <Header isEditing={isEditing} />}
      {enabledSections.hero && <Hero isEditing={isEditing} />}
      {enabledSections.about && <About isEditing={isEditing} />}
      {enabledSections.skills && <Skills isEditing={isEditing} />}
      {enabledSections.experience && <Experience isEditing={isEditing} />}
      {enabledSections.projects && <Projects isEditing={isEditing} />}
      {enabledSections.achievements && <Achievements isEditing={isEditing} />}
      {enabledSections.certificates && <Certificates isEditing={isEditing} />}
      {enabledSections.organizations && <Organizations isEditing={isEditing} />}
    </div>
  );
};

export default BlankTemplate;